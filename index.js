window.focus();

const drum = document.querySelectorAll(".drum-pad");

const data = [
  {
    letter: "Q",
    keycode: 81,
    id: "open-hh",
    url: "./FCC-Drum-Machine-Sounds/openhat.wav",
  },
  {
    letter: "W",
    keycode: 87,
    id: "closed-hh",
    url: "./FCC-Drum-Machine-Sounds/hihat.wav",
  },
  {
    letter: "E",
    keycode: 69,
    id: "kick-and-hat",
    url: "./FCC-Drum-Machine-Sounds/kick.wav",
  },
  {
    letter: "A",
    keycode: 65,
    id: "boom",
    url: "./FCC-Drum-Machine-Sounds/boom.wav",
  },
  {
    letter: "S",
    keycode: 83,
    id: "clap",
    url: "./FCC-Drum-Machine-Sounds/clap.wav",
  },
  {
    letter: "D",
    keycode: 68,
    id: "ride",
    url: "./FCC-Drum-Machine-Sounds/ride.wav",
  },
  {
    letter: "Z",
    keycode: 90,
    id: "tink",
    url: "./FCC-Drum-Machine-Sounds/tink.wav",
  },
  { 
    letter: "X", 
    keycode: 88, 
    id: "Tom", 
    url: "./FCC-Drum-Machine-Sounds/tom.wav" 
  },
  {
    letter: "C",
    keycode: 67,
    id: "snare",
    url: "./FCC-Drum-Machine-Sounds/snare.wav",
  },
];

const updateDisplay = (display) => {
    document.querySelector("#display h2").innerText = display.toUpperCase();
};

const clickPlay = (e) => {
  const dataKey = e.target.getAttribute("id");
  
  if(dataKey){
      const sound = document.querySelector(`audio[data-key="${dataKey}"]`);        
      const pad = document.querySelector(`div[id="${dataKey}"]`);     
      pad.classList.add("playing");
      sound.currentTime = 0;
      sound.play();          
      updateDisplay(dataKey);
  }else{
      return;
  }
};

const playSound = (e) => {   
  for(element of data){
    if(e.keyCode == element.keycode){
      const audio = document.querySelector(`audio[id="${element.id}"]`);
      const key = document.querySelector(`div[id="${element.id}"]`);
      if (!audio) return;
      key.classList.add("playing");
      audio.currentTime = 0;
      audio.play();  
      updateDisplay(element.id)
    }
  } 
};

drum.forEach((element)=>{
    element.addEventListener("click", clickPlay);    
})
   
document.addEventListener("keydown", playSound);

