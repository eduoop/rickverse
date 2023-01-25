import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import { GlobalStyle } from './global/globalStyles';
import Navbar from './components/Navbar';
import { useState } from "react";
import { MenuMobile } from "./components/MenuMobile";

function App() {

  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <MenuMobile
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
