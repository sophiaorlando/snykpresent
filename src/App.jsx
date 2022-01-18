import './App.scss'
import { useState } from 'react'

import TopBar from './components/topbar/Topbar'
import Menu from './components/menu/Menu'
import AboutMe from './components/aboutMe/AboutMe'
import Proud from './components/proud/Proud'
import Stack from './components/stackNative/Stack'
import Demo from './components/demonstration/Demo'
import ElFin from './components/ElFin/ElFin'
import { SliderData } from './components/aboutMe/SliderData';
import { SliderDataStack } from './components/stackNative/SliderData';



function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  // const [details, setDetails] = useState({})

  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <AboutMe slides = {SliderData}/>
        <Proud/>
        <Stack slides = {SliderDataStack}/>
        <Demo/>
        <ElFin/>
      </div>

    </div>
  );
}

export default App;
