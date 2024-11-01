import { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import LangSwitcher from './components/LangSwitcher/LangSwitcher';
import LoginForm from './components/LoginForm/LoginForm';
import SearchBar from './components/SearchBar/SearchBar';
import RadioButton from './components/RadioButton/RadioButton';
import CheckBox from './components/CheckBox/CheckBox';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState('uk');

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleLoginForm = userData => {
    console.log(userData);
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

      <h1>Please login to your account!</h1>
      <LoginForm onLogin={handleLoginForm}>
        <RadioButton />
      </LoginForm>

      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang} />
      <SearchBar />
      <CheckBox />
    </>
  );
}

export default App;
