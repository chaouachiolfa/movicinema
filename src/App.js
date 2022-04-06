import  moviData  from "./Componets/Data/Data"
import './App.css';
import MyNav from './Componets/MyNav/MyNav';
import MoviList from './Componets/MoviList/MoviList';
import Detail from "./Componets/MoviDetail/Detail";

import  React , { useState } from "react";
import AddMovie from './Componets/AddMovie/AddMovie'
import {Routes , Route} from 'react-router-dom'


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
  
  return (
    
    <div>
   <MyNav hdTitre={hdTitre} hdRate={hdRate}/>
     
   < AddMovie hdData={hdData} />
   
    <Routes>
      <Route path="/MoviList" element={<MoviList data={data} title={title} rate={rate}/>}/>
      <Route path ="/movi/:id" element={<Detail/>}/>
      
    </Routes>

 

    
   
    </div>
  );
}

export default App;
