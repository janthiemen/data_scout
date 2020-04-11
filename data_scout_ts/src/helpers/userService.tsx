import { IToastProps, Intent } from "@blueprintjs/core";

/**
 * The API caller handles all API requests to the Scout backend.
 */
export class APICaller {
    private addToast: (toast: IToastProps) => void;
    private setLoggedIn: (loggedIn: boolean) => void;

    /**
     * Construct an API caller object. It will also check if the user is logged in on creation.
     * @param addToast Method to add a toast with
     * @param setLoggedIn Method to set if the user is logged in
     */
    constructor(addToast: (toast: IToastProps) => void, setLoggedIn: (loggedIn: boolean) => void) {
        this.addToast = addToast;
        this.call = this.call.bind(this);
        this.setLoggedIn = setLoggedIn;
        this.checkLoggedIn();
    }

    /**
     * Check if the user is logged in.
     */
    public checkLoggedIn() {
        this.call("http://localhost:8000/scout/token/check/", "GET", {}, (body: {}) => {this.setLoggedIn(true);})
    }

    /**
     * Get the headers to make an API request.
     */
    private getHeaders(): {} {
        let access_token = localStorage.getItem("jwt_access_token");
        if (access_token !== undefined) {
            return {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`
            }
        } else {
            return {
                'Content-Type': 'application/json',
            }
        }
    }

    /**
     * Refresh the access token and then continue calling the API.
     * @param url The URL that should be called after the refresh
     * @param body The request body
     * @param callback The callback to be called after the token is refreshed
     */
    private refreshToken(url: string, type: string, body: {}, callback: (body: {}) => void) {
        // If we're refreshing we may assume that the old token is obsolete
        localStorage.removeItem("jwt_access_token");
        let refresh_token = localStorage.getItem("jwt_refresh_token");
        fetch(url, {
            method: "POST",
            headers: this.getHeaders(),
            body: JSON.stringify({ "refresh": refresh_token })
        })
            .then(r => r.json().then(data => ({ status: r.status, body: data })))
            .then((result) => {
                let status = result["status"];
                let body = result["body"];
                switch (status) {
                    case 401:
                        localStorage.removeItem("jwt_refresh_token");
                        this.setLoggedIn(false);
                        break;
                    default:
                        localStorage.setItem("jwt_access_token", body["access"]);
                        this.call(url, type, body, callback, true);
                        break;
                }

            })
            .then((error) => {
                // console.log("ERROR");
                // this.addToast({ intent: Intent.DANGER, message: "An error occured!" })
                this.setLoggedIn(false);
                // console.log(error);
            });

        this.call(url, type, body, callback, true);
    }

    public call(url: string, type: string, body: {}, callback: (body: {}) => void, wasRefreshed: boolean = false) {
        /**
         * Call an API. This method handles authentication using JWT tokens (refreshing, etc.).
         * @param url: string: The URL to call
         */
        let properties;
        if (type === "GET") {
            properties = {method: type, headers: this.getHeaders()}
        } else {
            properties = {method: type, headers: this.getHeaders(), body: JSON.stringify(body)}
        }

        fetch(url, properties)
            .then(r => r.json().then(data => ({ status: r.status, body: data })).catch(data => ({ status: r.status, body: {} })))
            .then((result) => {
                let status = result["status"];
                let body = result["body"];
                switch (status) {
                    case 401:
                        if (!wasRefreshed) {
                            this.refreshToken(url, type, body, callback);
                        } else {
                            this.setLoggedIn(false);
                        }
                        break;
                    default:
                        // console.log("Success");
                        callback(body);
                        break;
                }

            })
            .then((error) => {
                // console.log("ERROR");
                // this.addToast({ intent: Intent.DANGER, message: "An error occured!" })
                // console.log(error);
            });
    }

    public login(email: string, password: string, callbackSuccess: (body: {}) => void, callbackError: (body: {}) => void) {
		fetch("http://localhost:8000/scout/token/", {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ "username": email, "password": password })
		})
			.then(res => res.json())
			.then(
				(result) => {
					localStorage.setItem('jwt_access_token', result["access"]);
					localStorage.setItem('jwt_refresh_token', result["refresh"]);
                    this.setLoggedIn(true);
                    callbackSuccess(result);
				},
				(error) => {
                    // console.log(error);
                    this.setLoggedIn(false);
					// callbackError(error);
				}
			)
	}
}

export class DataSourceService extends APICaller {
    /**
     * Construct a data source service object.
     * @param addToast Method to add a toast with
     * @param setLoggedIn Method to set if the user is logged in
     */
    constructor(addToast: (toast: IToastProps) => void, setLoggedIn: (loggedIn: boolean) => void) {
        super(addToast, setLoggedIn);
    }

    getTypes(callback: (body: {}) => void) {
        console.log("Types:");
        this.call("http://localhost:8000/scout/datasource_types/", "GET", {}, callback);
    }

    get(callback: (body: {}) => void) {
        this.call("http://localhost:8000/scout/api/datasource/", "GET", {}, callback);
    }

    save(data: { [key: string]: any }, callback: (body: {}) => void) {
        if (data["id"] > 0) {
            this.call(`http://localhost:8000/scout/api/datasource/${data["id"]}/`, "PUT", data, callback);
        } else {
            this.call("http://localhost:8000/scout/api/datasource/", "POST", data, callback);
        }
    }

    delete(id: number | string, callback: (body: {}) => void) {
        this.call(`http://localhost:8000/scout/api/datasource/${id}/`, "DELETE", {}, callback);
    }
}