
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Add from './pages/Add/Add';
import Wishlist from './pages/Wishlist/Wishlist';
import Detail from './pages/Detail/Detail';
import MainContext from './context/Context';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import Basket from './pages/Basket/Basket';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <MainContext.Provider  >
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/add" element={<Add/>} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/:id" element={<Detail/>} />
          <Route path="/basket" element={<Basket/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer/>
        </BrowserRouter>
      </MainContext.Provider>
    </div>
  );
}

export default App;
