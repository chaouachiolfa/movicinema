import  moviData  from "./Componets/Data/Data"
import './App.css';
import MyNav from './Componets/MyNav/MyNav';
import MoviList from './Componets/MoviList/MoviList';
import Particles from "react-tsparticles"

import  React , { useState } from "react";
import AddMovie from './Componets/AddMovie/AddMovie'

function App() {
  const[title , setTitre]=useState("")
  const hdTitre=(input) =>{
    setTitre(input)
  }

  const [rate , setRate] = useState(0)
  const hdRate=(input) => {
    setRate(input)
  }
  const [data,setData]=useState(moviData)
  
  const hdData=(input)=>{
    setData([...data,input])

  }
  const particlesInit = (main) => {
    console.log(main);
  
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };
  
  const particlesLoaded = (container) => {
    console.log(container);
  };
  
  return (
    
    <div>
   <MyNav hdTitre={hdTitre} hdRate={hdRate}/>
      < AddMovie hdData={hdData} />
     <MoviList data={data} title={title} rate={rate}/>

     <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 900,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 500,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 20,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />

 

    
   
    </div>
  );
}

export default App;
