import { useEffect } from 'react'
import { getAllNFTs, isWallectConnected } from './Blockchain.Services'
import Home from "./homePage/homeWrap";
import Guide from "./pages/Guide/Guide";
import Market from "./pages/Market/Market";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const App = () => {
  useEffect(async () => {
    await isWallectConnected()
    await getAllNFTs()
  }, [])

  return (
    <div className="min-h-screen">
      <Router>
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="/Guide" element={ <Guide/> } />
        <Route exact path="/Market" element={ <Market/> } />
      </Routes>
      </Router>
    </div>
  );
}

export default App
