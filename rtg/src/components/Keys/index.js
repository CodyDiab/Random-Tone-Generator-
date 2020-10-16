import React from "react";
import * as Tone from 'tone';


function Keys () {
   const synth = new Tone.Synth().toDestination();
   
   const trigger = (value) => {
       synth.triggerAttackRelease(value,"8n")
   }

    return(
        <ul id="KEYS">
  <li data-note="C4" className="key" onClick={trigger("C4")} >
    <div data-note="C#4" className="black-key" oClick={trigger("C#4")}></div>
    
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