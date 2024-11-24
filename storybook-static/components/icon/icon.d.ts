import { FC } from 'react';
export interface ISvgProps {
    /**
     * Меняет display с inline-block на block
     */
    block?: boolean;
    /**
     * Название иконки
     */
    iconName?: string;
    /**
     * Размер иконки
     */
    size?: number;
}
/**
 * Компонент иконка
 */
export declare const Icon: FC<ISvgProps>;
