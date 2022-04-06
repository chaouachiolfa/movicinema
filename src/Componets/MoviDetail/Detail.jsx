import React,{useEffect , useState} from 'react'
import { useParams} from 'react-router-dom'
import movieData from '../Data/Data'
import "./Detail"

const Detail = () => {
    const [movi,setMomvi] =useState({});
  
    
    const params = useParams()
    useEffect(()=>{
        setMomvi(movieData.find(movi=>movi.id === params.id ))

    },[params.id])
  return (
    <div>
 <h1 className='tra' >Trailer</h1>
<h1 className='tr'>{movi.titre}</h1>
<iframe className='if'  width="600" height="400" src={movi.trailer} 
title="YouTube video player" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen></iframe>


    </div>
  )
}

export default Detail