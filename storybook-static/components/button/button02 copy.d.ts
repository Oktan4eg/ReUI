import { MouseEventHandler } from 'react';
interface ButtonProps {
    label?: string;
    color?: 'neutral' | 'lead' | 'success' | 'distuctive' | 'info' | 'warning';
    inverse?: boolean;
    appearance: 'filled' | 'outlined' | 'tonal' | 'linked';
    size?: 'lg' | 'md' | 'sm';
    disabled?: boolean;
    iconBefore?: React.ReactNode;
    iconAfter?: React.ReactNode;
    onClick?: MouseEventHandler;
}
export declare const Button2: React.FC<ButtonProps>;
export {};
