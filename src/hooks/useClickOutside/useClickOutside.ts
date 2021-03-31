import { useRef, useEffect, useCallback, RefObject } from 'react';

import { CloseFunction } from './useClickOutside.types';

const useClickOutside = <T extends HTMLElement>(onClose: CloseFunction): RefObject<T> => {
  const ref = useRef<T>(null);

  const mouseListener = useCallback(
    (e) => {
      if (!ref.current?.contains(e.target)) {
        onClose(e);
      }
    },
    [onClose]
  );
  const keyboardListener = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('click', mouseListener);
    document.addEventListener('keyup', keyboardListener);

    return (): void => {
      document.removeEventListener('click', mouseListener);
      document.removeEventListener('keyup', keyboardListener);
    };
  }, [mouseListener, keyboardListener]);

  return ref;
};

export default useClickOutside;
