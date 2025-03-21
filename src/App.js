
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/main/Home';
import About from './pages/main/About';
import Contacts from './pages/main/Contacts';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contacts' element={<Contacts />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
