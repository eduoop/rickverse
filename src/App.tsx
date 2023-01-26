import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import { GlobalStyle } from './global/globalStyles';
import Navbar from './components/Navbar';
import { useState } from "react";
import { MenuMobile } from "./components/MenuMobile";
import { Characters } from "./pages/Characters";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <MenuMobile
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/characters' element={<Characters />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
