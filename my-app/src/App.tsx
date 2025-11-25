import './App.css'
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Slider from './components/Slider.tsx';
import { useState } from 'react';

function App() {

  const [activeMenu, setActiveMenu] = useState<string>("menu1");

  const handleActiveMenu = (menuName: string) => {
    setActiveMenu(menuName)
  }

  return (
    <>
      <Header onToggleSlider={handleActiveMenu} />
      {activeMenu === "menu1" && <Slider />}
      <Footer />
    </>
  )
}

export default App
