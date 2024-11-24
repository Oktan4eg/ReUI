import { FC } from 'react';
import { InputProps } from '../text-input';
export interface ToggleProps extends InputProps {
    checked?: boolean;
    color?: 'neutral' | 'inverse' | 'lead' | 'success' | 'distuctive' | 'info' | 'warning';
    className?: string;
}
export declare const Toggle: FC<ToggleProps>;
