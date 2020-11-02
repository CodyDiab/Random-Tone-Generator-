import React,{useEffect,useState} from "react";
import * as Tone from 'tone';


function Keys () {
    // const [note,setNote] = useState(null)
   const synth = new Tone.Synth
   synth.toDestination();

  //  const now = Tone.now()

   ///test function
   function playSynthC4() {
     synth.triggerAttackRelease("C4","8n")
   }
   function playSynthD4() {
    synth.triggerAttackRelease("D4","8n")
   }
   function playSynthE4() {
    synth.triggerAttackRelease("E4","8n")
   }
   ////

   const handleKey = (e) => {
    switch (e.key) {
        case "d":
          return synth.triggerAttackRelease("C4","8n")
        case "r":
          return synth.triggerAttackRelease("C#4","8n");
        case "f":
          return synth.triggerAttackRelease("D4","8n");
        case "t":
          return synth.triggerAttackRelease("D#4","8n");
        case "g":
          return synth.triggerAttackRelease("E4","8n");
        case "h":
          return synth.triggerAttackRelease("F4","8n");
        case "u":
          return synth.triggerAttackRelease("F#4","8n");
        case "j":
          return synth.triggerAttackRelease("G4","8n");
        case "i":
          return synth.triggerAttackRelease("G#4","8n");
        case "k":
          return synth.triggerAttackRelease("A4","8n");
        case "o":
          return synth.triggerAttackRelease("A#4","8n");
        case "l":
          return synth.triggerAttackRelease("B4","8n");
       
        default:
          return;
     }
   }
    const handleKeyUp = (e) => {
        switch (e.key) {
            case "d":
            case "r":
            case "f":
            case "t":
            case "g":
            case "h":
            case "u":
            case "j":
            case "i":
            case "k":
            case "o":
            case "l":
               synth.triggerRelease(); 
          } 
    }
   React.useEffect(() => {
    window.addEventListener('keydown', handleKey);
    
    return () => {
        window.addEventListener('keyup', handleKeyUp)
    }
   }, []);
   
//set switch statement to trigger attack

    return(
        <>
        <ul id="KEYS">
  <li data-note="C4" className="key" onClick={playSynthC4}>
    <div data-note="C#4" className="black-key">R</div>
    D
  </li>
  <li data-note="D4" className="key" onClick={playSynthD4}>
    <div data-note="D#4" className="black-key">T</div>
    F
  </li>
  <li data-note="E4" className="key" onClick={playSynthE4}>
    G
  </li>
  <li data-note="F4" className="key">
    <div data-note="F#4" className="black-key">U</div>
    H
  </li>
  <li data-note="G4" className="key">
    <div data-note="G#4" className="black-key">I</div>
    J
  </li>
  <li data-note="A4" className="key">
    <div data-note="A#4" className="black-key">O</div>
    K
  </li>
  <li data-note="B4" className="key">
    L
  </li>
</ul>
 <button data-note="KILL">Kill</button>
 </>
    )
}

export default Keys;