import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App bg-thinfor">
      <BrowserRouter>
          <Routes>
            <Route  path="/" element = {<Home/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
