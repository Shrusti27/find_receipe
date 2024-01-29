import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import Favourites from './pages/favourites'
import Details from './pages/details';
import GlobalState from './context';

function App() {
  return (
    <div>
      <GlobalState>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/favourites" element={<Favourites/>} />
          <Route path="/recipe-item/:id" element={<Details/>} />
        </Routes>
      </GlobalState>
    </div>
  );
}

export default App;
