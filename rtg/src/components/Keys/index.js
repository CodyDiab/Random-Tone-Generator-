import React from "react";
import * as Tone from 'tone';


function Keys () {
   const synth = new Tone.PolySynth(Tone.Synth).toDestination();
   const now = Tone.now()
   
//    const trigger = () => {
       
//        synth.triggerAttack("C4",now)
       
//    }
//    const release = () => {
//        synth.triggerRelease(now+1)
//    }

    return(
        <ul id="KEYS">
  <li data-note="C4" className="key" onClick={synth.triggerAttack("C4",now)} onBlur={synth.triggerRelease(now+1)} >
    <div data-note="C#4" className="black-key" oClick={synth.triggerAttack("C#4")} onBlur={synth.triggerRelease(now+1)}></div>
    
  </li>
  <li data-note="D4" className="key">
    <div data-note="D#4" className="black-key"></div>
    
  </li>
  <li data-note="E4" className="key">
    
  </li>
  <li data-note="F4" className="key">
    <div data-note="F#4" className="black-key"></div>
    
  </li>
  <li data-note="G4" className="key">
    <div data-note="G#4" className="black-key"></div>
    
  </li>
  <li data-note="A4" className="key">
    <div data-note="A#4" className="black-key"></div>
    
  </li>
  <li data-note="B4" className="key">
    
  </li>
</ul>
    )
}

export default Keys;