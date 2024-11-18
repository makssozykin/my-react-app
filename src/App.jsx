// import { useState, useEffect, useRef } from 'react';
// // import { fetchArticlesWithTopic } from '../src/articles-api';
// // import { ThreeDots } from 'react-loader-spinner';
// import './App.css';
// import CustomButton from './components/CustomButton/CustomButton';
// // import Player from './components/Player/Player';
// // import ArticleList from './components/ArticleList/ArticleList';
// // import SearchForm from './components/SearchForm/SearchForm';
// import Modal from './components/Modal/Modal';
// // import LangSwitcher from './components/LangSwitcher/LangSwitcher';
// // import LoginForm from './components/LoginForm/LoginForm';
// // import SearchBar from './components/SearchBar/SearchBar';
// // import RadioButton from './components/RadioButton/RadioButton';
// // import CheckBox from './components/CheckBox/CheckBox';

// function App() {
//   //-----------------------------------------------------------
//   // const [isOpen, setIsOpen] = useState(false);
//   // const [lang, setLang] = useState('uk');

//   // const openModal = () => {
//   //   setIsOpen(true);
//   // };

//   // const closeModal = () => {
//   //   setIsOpen(false);
//   // };

//   // const handleLoginForm = userData => {
//   //   console.log(userData);
//   // };

//   //----------------------------------------------------------
//   // const [articles, setArticles] = useState([]);
//   // const [loading, setLoading] = useState(false);
//   // const [error, setError] = useState(false);

//   //*-----------------------------------------------------------*/
//   // useEffect(() => {
//   //   // 1. Оголошуємо асинхронну функцію
//   //   async function fetchArticles() {
//   //     try {
//   //       setLoading(true);
//   //       // Тут будемо виконувати HTTP-запит
//   //       const data = await fetchArticlesWithTopic('react');
//   //       setArticles(data);
//   //     } catch (error) {
//   //       setError(true);
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   }

//   //   // 2. Викликаємо її одразу після оголошення
//   //   fetchArticles();
//   // }, []);

//   //*-----------------------------------------------------------*/
//   //----------------------------------------------------------

//   // const handleSearch = async topic => {
//   //   try {
//   //     setArticles([]);
//   //     setLoading(false);
//   //     setLoading(true);
//   //     const data = await fetchArticlesWithTopic(topic);
//   //     setArticles(data);
//   //   } catch (error) {
//   //     setError(true);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };
//   //----------------------------------------------------------
//   const btnRef = useRef();

//   useEffect(() => btnRef.current.focus(), []);

//   return (
//     <>
//       {
//         //----------------------------------------------------------
//         /* <button type="button" onClick={openModal}>
//         Modal
//       </button>
//       {isOpen && (
//         <Modal onClose={closeModal}>
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum minus
//           quia a laborum, sed voluptatibus adipisci ratione obcaecati ullam
//           eaque, ipsum voluptates qui deserunt vero laboriosam aperiam? Atque,
//           quo fuga!
//         </Modal>
//       )}

//       <h1>Please login to your account!</h1>
//       <LoginForm onLogin={handleLoginForm}>
//         <RadioButton />
//       </LoginForm>

//       <p>Selected language: {lang}</p>
//       <LangSwitcher value={lang} onSelect={setLang} />
//       <SearchBar />
//       <CheckBox /> */
//       }
//       {
//         //----------------------------------------------------------
//         /* <div>
//         <h1>Latest articles</h1>
//         <SearchForm onSearch={handleSearch} />
//         {loading && (
//           <ThreeDots
//             visible={true}
//             height="80"
//             width="80"
//             color="#4fa94d"
//             radius="9"
//             ariaLabel="three-dots-loading"
//             wrapperStyle={{}}
//             wrapperClass=""
//           />
//         )}
//         {error && (
//           <p>Whoops, something went wrong! Please try reloading this page!</p>
//         )}
//         <ul>{articles.length > 0 && <ArticleList items={articles} />}</ul>
//       </div> */
//       }
//       {
//         //----------------------------------------------------------
//         /* <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" /> */
//       }
//       <CustomButton ref={btnRef}>Button with forwarded ref</CustomButton>
//     </>
//   );
// }

// export default App;

// import { forwardRef, useRef, useEffect } from 'react';

// const CustomButton = forwardRef(function CustomButton(props, ref) {
//   return <button ref={ref}>{props.children}</button>;
// });
//----------------------------------------------------------

// import { useToggle } from '../src/hooks/useToggle';
//----------------------------------------------------------

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { Mission } from './components/Mission/Mission';
import { Team } from './components/Team/Team';
import { Reviews } from './components/Reviews/Reviews';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import NotFound from './pages/NotFound';
import css from './App.module.css';
import { AppBar } from './components/AppBar/AppBar';

const App = () => {
  //----------------------------------------------------------

  // const btnRef = useRef();

  // useEffect(() => btnRef.current.focus(), []);

  // return <CustomButton ref={btnRef}>Button with forwarded ref</CustomButton>;
  //----------------------------------------------------------

  // const { isOpen, open, close } = useToggle(true);
  //----------------------------------------------------------

  return (
    <>
      {
        //----------------------------------------------------------
        /* <button onClick={open}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={close} /> */
        //----------------------------------------------------------
      }
      <AppBar />
      <div className={css.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="mission" element={<Mission />} />
            <Route path="team" element={<Team />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
