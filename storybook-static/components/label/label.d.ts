import { FC, ReactNode } from 'react';
type FontWeight = 'regular' | 'semiBold';
export interface LabelProps {
    children: ReactNode;
    htmlFor?: string;
    input?: boolean;
    danger?: boolean;
    success?: boolean;
    disabled?: boolean;
    fontWeight?: FontWeight;
    /**
     * Allow to apply custom classes to component
     */
    className?: string;
}
export declare const Label: FC<LabelProps>;
export {};
