/// <reference types="react" />
interface IButtonProps {
    appearance: 'filled' | 'outlined' | 'ghosty';
    size?: 'lg' | 'md' | 'sm';
    color?: 'fg' | 'lead';
    disabled?: boolean;
    iconBefore?: React.ReactNode;
    iconAfter?: React.ReactNode;
    label?: string;
}
export declare const Button: React.FC<IButtonProps>;
export {};
