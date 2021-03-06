import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export declare type Appearance = 'info' | 'alert' | 'warning' | 'success' | 'default';
export interface StatusHintProps extends BaseProps {
    children: string;
    appearance?: Appearance;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
export declare const StatusHint: {
    (props: StatusHintProps): JSX.Element;
    displayName: string;
};
export default StatusHint;
