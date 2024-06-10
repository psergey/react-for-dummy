import { useEffect, useRef } from 'react';

export const useOutsideClick = <T extends HTMLElement>(handler: () => void, useCapture = true) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler();
      }
    };

    document.addEventListener('click', clickHandler, useCapture);

    return () => {
      document.removeEventListener('click', clickHandler, useCapture);
    };
  }, [handler, useCapture]);

  return ref;
};
