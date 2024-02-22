import './styles/global.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Product from './pages/Product/Product';
import NotFound from './pages/NotFound/NotFound';
import DicesFight from './pages/DicesFight/DicesFight';
import WorkShopStation from './pages/WorkShopStation/WorkShopStation';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='product' element={<Product />} />
        <Route path='DicesFight' element={<DicesFight />} />
        <Route path='WorkShopStation' element={<WorkShopStation />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;