/// <reference types="react" />
interface IButtonProps {
    appearance?: 'filled' | 'outlined' | 'ghosty' | 'linked';
    color?: 'neutral' | 'lead' | 'success' | 'distuctive' | 'info' | 'warning';
    size?: 'lg' | 'md' | 'sm';
    disabled?: boolean;
    iconBefore?: React.ReactNode;
    iconAfter?: React.ReactNode;
    label?: string;
}
export declare const ButtonWithStateLayer: React.FC<IButtonProps>;
export {};
