import { FC, PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';

import classes from './Modal.module.css';
import { useOutsideClick } from '@hooks/useOutsideClick';

const Modal: FC<PropsWithChildren<{ open: boolean; onClose(): void }>> = (props): React.ReactElement => {
  const { open, onClose, children } = props;
  const ref = useOutsideClick<HTMLDivElement>(onClose);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {open
        ? createPortal(
            <div className={classes.overlay}>
              <div className={classes.modal} ref={ref}>
                {children}
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
};

export default Modal;
