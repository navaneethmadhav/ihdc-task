import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Features from './Components/Features';
import Header from './Components/Header';
import Benefits from './Components/Benefits';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Features />} />
          <Route path='/exclusive-benefits' element={<Benefits />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
