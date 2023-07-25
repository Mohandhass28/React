import React, { useState } from 'react';
import { meal } from "../../constants";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import './Intro.css';

const Intro = () => {
  const[playVideo, setplayVideo] = React.useState(false)
  const vidRef = React.useRef()

  const videoHandler = () => {
    // setplayVideo((prevplay) => !prevplay)

    if (playVideo){
      vidRef.current.pause()
      setplayVideo(false)
    }
    else{
      vidRef.current.play()
      setplayVideo(true)
    }
  }

  return (  
    <div className='section__padding back' >
      <div className="app__video">
      <video
        src={meal}
        ref={vidRef}
        type='Video/mp4'
        Loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div 
          className="app__video-overlay_circle flex__center"
          onClick={videoHandler}
          >
            {playVideo 
            ? <BsPauseFill />
            : <BsFillPlayFill />
              }
            

        </div>
      </div>
      </div>
    </div>
  )
};

export default Intro;
