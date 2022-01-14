import TopBar from './components/topbar/Topbar'

import './App.css'
import { useState } from 'react'


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  // const [details, setDetails] = useState({})

  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
}

export default App;
