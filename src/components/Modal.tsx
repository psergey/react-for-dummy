import { FC, PropsWithChildren, createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';

import classes from './Modal.module.css';
import { useOutsideClick } from '../hooks/useOutsideClick';

interface ModalContextType {
  openName: string;
  open: (name: string) => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextType>({
  openName: '',
  open: function (): void {},
  close: function (): void {},
});

const Modal: FC<PropsWithChildren> = ({ children }): React.ReactElement => {
  const [openName, setOpenName] = useState('');
  const close = () => {
    setOpenName('');
    //document.body.style.overflow = '';
  };
  const open = (name: string) => setOpenName(name);

  return (
    <ModalContext.Provider
      value={{
        openName,
        close,
        open,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const Open: FC<{ opens: string; render: (action: () => void) => React.ReactNode } & PropsWithChildren> = ({
  render,
  opens,
}): React.ReactNode => {
  const { open } = useContext(ModalContext);

  return render(() => {
    open(opens);
    //document.body.style.overflow = 'hidden';
  });

  //return cloneElement(children, { onClick: () => open(opensWindowName) });
};

const Window: FC<{ name: string; closeWindow(): void } & PropsWithChildren> = ({
  children,
  name,
  closeWindow,
}): React.ReactNode => {
  const { openName, close } = useContext(ModalContext);
  const closeFn = () => {
    closeWindow();
    close();
  };
  const ref = useOutsideClick<HTMLDivElement>(closeFn);

  if (openName !== name) return null;

  return createPortal(
    <div className={classes.overlay}>
      <div className={classes.modal} ref={ref}>
        <div>
          <button onClick={closeFn}>x</button>
        </div>
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Object.assign(Modal, {
  Open: Open,
  Window: Window,
});
