import { Routes, Route } from 'react-router-dom';

import './App.css';
import { Home } from './components/home/Home';
import { Playboard } from './components/playboard/Playboard';
import { GameResults } from './components/game-results/GameResults';

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/playboard' element={<Playboard />}></Route>
        <Route path='/game-results' element={<GameResults/>}></Route>
      </Routes>
    </>
  )
}

export default App
