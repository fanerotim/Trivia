import { Routes, Route } from 'react-router-dom';

import './App.css';
import { Home } from './components/home/Home';
import { Playboard } from './components/playboard/Playboard';

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/playboard' element={<Playboard />}></Route>
      </Routes>
    </>
  )
}

export default App
