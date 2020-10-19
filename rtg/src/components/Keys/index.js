import React,{useEffect,useState} from "react";
import * as Tone from 'tone';


function Keys () {
    const [note,setNote] = useState(null)
   const synth = new Tone.PolySynth(Tone.Synth).toDestination();
   const now = Tone.now()
    
   const handleKey = (e) => {
    switch (e.key) {
        case "d":
          return synth.triggerAttack("C4");
        case "r":
          return synth.triggerAttack("C#4");
        case "f":
          return synth.triggerAttack("D4");
        case "t":
          return synth.triggerAttack("D#4");
        case "g":
          return synth.triggerAttack("E4");
        case "h":
          return synth.triggerAttack("F4");
        case "u":
          return synth.triggerAttack("F#4");
        case "j":
          return synth.triggerAttack("G4");
        case "i":
          return synth.triggerAttack("G#4");
        case "k":
          return synth.triggerAttack("A4");
        case "o":
          return synth.triggerAttack("A#4");
        case "l":
          return synth.triggerAttack("B4");
        case "b":
          return synth.triggerRelease("C4","C#4","D4","D#4","E4","F4","F#4","G4","A4","A#4","B4", now);
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
    // cleanup componenet
    return () => {
        window.addEventListener('keyup', handleKeyUp)
    }
   }, []);
   
//set switch statement to trigger attack

    return(
        <>
        <ul id="KEYS">
  <li data-note="C4" className="key">
    <div data-note="C#4" className="black-key">R</div>
    D
  </li>
  <li data-note="D4" className="key">
    <div data-note="D#4" className="black-key">T</div>
    F
  </li>
  <li data-note="E4" className="key">
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