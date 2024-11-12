import { useState } from 'react';

export const useToggle = (Initial = false) => {
  const [isOpen, setIsOpen] = useState(Initial);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return { isOpen, open, close };
};
