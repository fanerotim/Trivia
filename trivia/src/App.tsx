import { Routes, Route } from 'react-router-dom';

import './App.css';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Playboard } from './components/playboard/Playboard';
import { GameResults } from './components/game-results/GameResults';
import { Footer } from './components/footer/Footer';

function App() {

  return (
    <>
      <div
        className='app__container'
      >
        <Header/>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/playboard' element={<Playboard />}></Route>
          <Route path='/game-results' element={<GameResults />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
