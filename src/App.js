import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage';
import AllBeers from './pages/AllBeers';
import SingleBeer from './pages/SingleBeer';
import NewBeer from './pages/NewBeer';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all_beers" element={<AllBeers />} />
        <Route path="/new_beer" element={<NewBeer />} />
        <Route path="/single_beer/:beerId" element={<SingleBeer />} />
      </Routes>
    </div>
  );
}

export default App;
