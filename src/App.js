
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/main/Home';
import Photos from './pages/main/Photos';
import About from './pages/main/About';
import Contacts from './pages/main/Contacts';
import NotFound from './pages/main/NotFound';
import './App.css';

function App() {

  const text = {
    title: "API «Работа России»",
    description: "API разработан для получения доступа к открытым данным портала «Работа России». С помощью реализованного API можно получить информацию обо всех вакансиях, хранящихся в системе, или узнать о вакансиях конкретных регионов и работодателей."
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/photos' element={<Photos />} />
          <Route path='/about' element={<About text={text}/>} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
