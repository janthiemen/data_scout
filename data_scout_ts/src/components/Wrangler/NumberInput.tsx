import * as React from "react";
import { NumericInput } from "@blueprintjs/core";


interface NumberInputProps {
    field: string,
    value: number,
    onValueChange: (field: string, value: any) => void
}

interface NumberInputState {
    field: string,
    value: number
}

export class NumberInput extends React.PureComponent<NumberInputProps, NumberInputState> {
    private onValueChange: (field: string, value: any) => void;

    constructor(props: NumberInputProps) {
        super(props);
        console.log(props);
        this.onValueChange = props.onValueChange;
        this.state = {
            field: props.field,
            value: props.value,
        };
        this.onInputChange = this.onInputChange.bind(this);
    }

    /**
     * Called when new props are received.
     * @param props The new props
     */
    componentWillReceiveProps(props: NumberInputProps) {
        this.setState({
            field: props.field,
            value: props.value,
        });
    }

    /**
     * Called when an input (text or select) has been changed.
     * @param e The event
     */
    private onInputChange(inputAsNumber: number, inputAsString: string) {
        this.onValueChange(this.state.field, inputAsNumber);
    }

    /**
     * Renders a numeric input field.
     * @returns  
     */
    public render() {
        return <NumericInput min={0} minorStepSize={1} value={this.state.value} key={`transformation-input-${this.state.field}`} data-field={this.state.field} onValueChange={this.onInputChange} id={`transformation-input-${this.state.field}`} />
    }

}
