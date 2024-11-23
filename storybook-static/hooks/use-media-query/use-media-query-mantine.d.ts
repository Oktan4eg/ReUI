export interface UseMediaQueryOptions {
    getInitialValueInEffect: boolean;
}
export declare function useMediaQueryMantine(query: string, initialValue?: boolean, { getInitialValueInEffect }?: UseMediaQueryOptions): boolean | undefined;
