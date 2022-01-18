import './menu.scss'

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active") }>
      <ul>
          <li onClick={()=> setMenuOpen(false)}> 
          <a href="#about">About Me</a>
          </li>
          <li onClick={()=> setMenuOpen(false)}>
          <a href="#proud">Proud Moment</a>
          </li>
          <li onClick={()=> setMenuOpen(false)}>
          <a href="#stack">App Stack</a>
          </li>
          <li onClick={()=> setMenuOpen(false)}>
          <a href="#demo">Demo</a>
          </li>
          <li onClick={()=> setMenuOpen(false)}>
          <a href="#elFin">El fin</a>
          </li>
      </ul>
    </div>
  )
}
