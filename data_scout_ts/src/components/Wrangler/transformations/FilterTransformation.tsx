import { Button, ButtonGroup, Popover, Position, IProps, Menu, MenuItem } from "@blueprintjs/core";
import * as React from "react";

interface FilterTranformationMenuProps extends IProps {
    newTransformation: (transformationType: string) => void;
}

const FilterTranformationMenu: React.FunctionComponent<FilterTranformationMenuProps> = props => (
    <Menu>
        <MenuItem onClick={() => props.newTransformation("filter-value-missing")} text="Missing" />
        <MenuItem onClick={() => props.newTransformation("filter-value-mismatched")} text="Mismatched" />
        <MenuItem onClick={() => props.newTransformation("filter-value-is")} text="Value equals" />
        <MenuItem onClick={() => props.newTransformation("filter-value-isnot")} text="Value does not equal" />
        <MenuItem onClick={() => props.newTransformation("filter-value-isoneof")} text="Is in list" />
        <MenuItem onClick={() => props.newTransformation("filter-value-isnotoneof")} text="Is not in list" />
        <MenuItem onClick={() => props.newTransformation("filter-value-between")} text="Is between" />
        <MenuItem onClick={() => props.newTransformation("filter-value-notbetween")} text="Is not between" />
        <MenuItem onClick={() => props.newTransformation("filter-value-contains")} text="Contains" />
        <MenuItem onClick={() => props.newTransformation("filter-value-startswith")} text="Starts with" />
        <MenuItem onClick={() => props.newTransformation("filter-value-endswith")} text="Ends with" />
        <MenuItem onClick={() => props.newTransformation("filter-value-pattern")} text="Pattern (regex)" />
        <MenuItem onClick={() => props.newTransformation("filter-duplicate-rows")} text="Duplicate rows" />
        <MenuItem onClick={() => props.newTransformation("filter-rows-top")} text="From top" />
        <MenuItem onClick={() => props.newTransformation("filter-rows-range")} text="In range" />
        <MenuItem onClick={() => props.newTransformation("filter-rows-interval")} text="At regular intervals" />
    </Menu>
);

interface FilterTranformationState { }
interface FilterTranformationProps {
    newTransformation: (transformationType: string) => void;
}

export class FilterTransformationButton extends React.PureComponent<FilterTranformationProps, FilterTranformationState> {
    public state: FilterTranformationState = {};

    public render() {
        return (
            <ButtonGroup minimal={true}>
                <Popover content={<FilterTranformationMenu newTransformation={this.props.newTransformation} />} position={Position.BOTTOM_LEFT}>
                    <Button rightIcon="caret-down" text="Filter" />
                </Popover>
            </ButtonGroup>
        );
    }
}