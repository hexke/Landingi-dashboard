import { useCallback, useEffect, useRef } from "react";

const useTimeout = (callback: () => void, delay: number): [() => void, () => void] => {
    const callbackRef = useRef(callback);
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

    const clear = useCallback(() => {
        timeoutRef.current && clearTimeout(timeoutRef.current);
    }, []);

    const set = useCallback(() => {
        timeoutRef.current = setTimeout(() => {
            callbackRef.current();
        }, delay);
    }, [delay]);

    const reset = useCallback(() => {
        clear();
        set();
    }, [clear, set]);

    useEffect(() => {
        set();
        return clear;
    }, [delay, set, clear]);

    return [reset, clear];
}

export default useTimeout;