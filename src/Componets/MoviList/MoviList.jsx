import React from 'react'
import './MoviList.css'
import MoviCart from '../MoviCart/MoviCart'

const MoviList = ({data , title , rate }) => {
  
  return (
    <div className='list'>
     
{ 
    data
    .filter(movi=>movi.titre.toLowerCase().includes(title.toLowerCase()) &&(movi.rating >=rate))
    .map((movi , index) =><MoviCart movi={movi} key ={index}/>)
    
   
}


    </div>
  )
}

export default MoviList