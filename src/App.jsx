import { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button type="button" onClick={openModal}>
        Modal
      </button>
      {isOpen && (
        <Modal onClose={closeModal}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum minus
          quia a laborum, sed voluptatibus adipisci ratione obcaecati ullam
          eaque, ipsum voluptates qui deserunt vero laboriosam aperiam? Atque,
          quo fuga!
        </Modal>
      )}
    </>
  );
}

export default App;
