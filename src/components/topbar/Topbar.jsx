import './topbar.scss'
import {Person} from '@material-ui/icons';

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}> 
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">SNYK</a>
          <div className="itemContainer">
            <Person className="icon"/>
            <span>Sophia Orlando</span>
          </div>
          <div className="itemContainer">
            <span>Solutions Engineer Presentation</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>

          </div>
        </div>
      </div>
    </div>
  )
}
