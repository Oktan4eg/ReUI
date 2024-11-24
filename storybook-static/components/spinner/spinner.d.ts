import { FC } from 'react';
type TSpinnerSize = '16px' | '24px' | '32px' | '64px';
export interface ISpinnerProps {
    size?: TSpinnerSize;
}
export declare const Spinner: FC<ISpinnerProps>;
export {};
