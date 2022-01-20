import React from 'react'
import {useState} from 'react'
import './proud.scss'
import Fade from 'react-reveal/Fade';

function Proud() {

  const [showEl, setShowEl] = useState(false)
  const [showArr, setShowArr] = useState(false)
  const [showThird, setShowThird] = useState(false)
  const [showFourth, setShowFourth] = useState(false)
  const [showExtra, setShowExtra] = useState(false)


  const onClick = () => setShowEl(true);
  const onClickAr = () => setShowArr(true);
  const onClickThird = () => setShowThird(true);
  const onClickFourth = () => setShowFourth(true);
  function onClickExtra(){
    setShowExtra(true);
    setShowFourth(false);
    setShowThird(false);
    setShowArr(false);
    setShowEl(false);
  }


  return (
    <div id="proud" className='proud'>
      <div onClick={onClickExtra}>
          {showExtra ? 
          <div className='imageDiv'>
            <Fade>
              <img src="https://image.shutterstock.com/image-illustration/mad-scientist-professor-holding-bottle-260nw-151351163.jpg" alt="science" className='scientist'></img> 
            </Fade>
          </div>
          : <button className='extraBtn'>Extra</button> }

      </div>
      <div onClick={onClick} className='thirdPartyTool'>
        {showEl ? 
        <div>
          <Fade>
            <div className='background'>
              <div className='background2'>
                <h1 className='tool'>Third</h1>
                <h1 className='tool'>Party</h1>
                <h1 className='tool'>Tool</h1>
              </div>
            </div>
        </Fade>
        </div>
        
        : <h1 className={showExtra ? "theH1Hide" : "theH1"}>#1</h1>}
      </div>
      <div onClick={onClickAr}>
        {showArr ? 
        <div>
          <Fade>
            <div className='secondDiv'>
              <div className='arrowDiv'>
                  <img src="./assets/down.png" alt="" className='arrow' />
              </div>    
              <div className='meImg'>
                  <img src="./assets/me.png" alt="" className='me' />
              </div>   
            </div>
        </Fade>
        </div>
      : <h1 className={showExtra ? "theH1Hide" : "theH1"}>#2</h1>}
      </div>
      <div onClick={onClickThird}>
        {showThird ?
        <div>
          <Fade>
            <div className='thirdDiv'>
              <div className='arrowDiv'>
                <img src="./assets/down.png" alt="" className='arrow' />
              </div>  
              <div className='gifDiv'>
                <img src="./assets/giphy.gif" alt="giphy" className='giphy' />
              </div>
            </div> 
        </Fade>
        </div>
      : <h1 className={showExtra ? "theH1Hide" : "theH1"}>#3</h1>}
      </div>
<div onClick ={onClickFourth}>
  {showFourth ? 
  <div>
    <Fade>
      <div className='fourDiv'>
        <div className='arrowDiv'>
          <img src="./assets/down.png" alt="" className='arrow' />
        </div>  
        <div className='meImg'>
          <img src="./assets/me.png" alt="" className='me' />
        </div>  
        <div className='people'>
          <img src="https://p1.hiclipart.com/preview/680/384/858/group-of-people-crowd-drawing-social-group-cartoon-community-youth-team-png-clipart.jpg" alt="people" className='peopleImg' />
        </div>
      </div>
  </Fade>
  </div>

: <h1 className={showExtra ? "theH1Hide" : "theH1"}>#4</h1>}
</div>

    </div>
  )
}

export default Proud
