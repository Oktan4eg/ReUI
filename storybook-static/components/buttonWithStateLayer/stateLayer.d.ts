/// <reference types="react" />
interface IStateLayer {
    color?: 'neutral' | 'lead' | 'success' | 'distucrive' | 'info' | 'warning';
    disabled?: boolean;
}
export declare const StateLayer: React.FC<IStateLayer>;
export {};
