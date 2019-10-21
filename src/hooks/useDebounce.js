import { useState, useEffect } from 'react';

export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timeoutHandler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timeoutHandler);
        };
    }, [value]);

  return debouncedValue;
}