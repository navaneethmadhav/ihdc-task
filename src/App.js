import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Features from './Components/Features';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Features />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
