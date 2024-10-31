import { useEffect } from 'react';
import s from './Modal.module.css';

const Modal = ({ children, title = 'Default Modal', onClose }) => {
  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      console.log(event.key);
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    // const intervalId = setInterval(() => {
    //   console.log(new Date().toLocaleTimeString());
    // }, 1000);
    // const timeoutId = setTimeout(() => {
    //   console.log('Hello!🔥');
    // }, 3000);
    // cleanUp
    return () => {
      console.log('Мене закрили!');
      //   clearInterval(intervalId);
      //   clearTimeout(timeoutId);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div onClick={handleBackdropClick} className={s.wrapper}>
      <div className={s.content}>
        <>
          <h1>{title}</h1>
          <hr />
        </>
        <button onClick={onClose} className={s.closeBtn}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
