import './App.css';
import { Route, Routes } from 'react-router';
import Game from './pages/Game';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Game />} />
    </Routes>
  )
}

export default App;
