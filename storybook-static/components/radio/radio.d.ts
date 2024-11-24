import { FC } from 'react';
import { InputProps } from '../text-input';
export interface RadioProps extends InputProps {
    checked?: boolean;
    /**
     * Allow applying custom classes to component
     */
    className?: string;
}
export declare const Radio: FC<RadioProps>;
