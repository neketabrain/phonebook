import classNames from 'classnames';
import React, { useState, useEffect, FC, TransitionEvent } from 'react';
import { createPortal } from 'react-dom';

import { CloseIcon } from 'src/assets';
import { useClickOutside } from 'src/hooks';

import styles from './ModalContainer.module.scss';
import { ModalContainerProps } from './ModalContainer.types';

const ModalContainer: FC<ModalContainerProps> = (props) => {
  const { onClose, children, className, rootElement = '#modal-root' } = props;

  const [fadeType, setFadeType] = useState<string>();

  const root = document.querySelector(rootElement);
  const wrapperClasses = classNames(styles.wrapper, styles[`fade${fadeType}`]);
  const containerClasses = classNames(styles.container, className);

  const handleClose = () => {
    setFadeType('Out');
  };

  const handleTransitionEnd = ({ propertyName }: TransitionEvent<HTMLDivElement>) => {
    if (propertyName === 'opacity' && fadeType === 'Out') {
      onClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    setFadeType('In');
  }, [setFadeType]);

  const ref = useClickOutside<HTMLDivElement>(handleClose);

  if (!root) {
    return <></>;
  }

  return createPortal(
    <div className={wrapperClasses} onTransitionEnd={handleTransitionEnd}>
      <div className={containerClasses} ref={ref} role="dialog">
        <div className={styles.closeContainer}>
          <button onClick={handleClose} aria-label="Закрыть">
            <CloseIcon />
          </button>
        </div>
        {children}
      </div>
    </div>,
    root
  );
};

export default ModalContainer;
