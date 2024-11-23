/// <reference types="react" />
interface IButtonProps {
    appearance: 'filled' | 'outlined' | 'tonal' | 'linked';
    color?: 'neutral' | 'lead' | 'success' | 'distucrive' | 'info' | 'warning';
    size?: 'lg' | 'md' | 'sm';
    disabled?: boolean;
    iconBefore?: React.ReactNode;
    iconAfter?: React.ReactNode;
    label?: string;
}
export declare const Button2: React.FC<IButtonProps>;
export {};
