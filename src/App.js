import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import Footer from './components/footer';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Home from "./pages/home"; 
import TersmOfUse from './pages/termsofuse';
import Privacy from './pages/privacy';
import Minigame from './pages/p5_sketches/minigame';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/termsofuse" element={<TersmOfUse/>}/>
          <Route exact path="/privacy" element={<Privacy/>}/>
          <Route exact path="/minigame" element={<Minigame/>}/>
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}
//heyyyy this is a test

export default App;
