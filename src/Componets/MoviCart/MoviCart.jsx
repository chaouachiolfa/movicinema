import React from 'react'
import './MoviCart.css'
const MoviCart = ({movi}) => {
  return (
    <div className='cart'>
<img src={movi.poster} alt="img"/>
<h1>{movi.titre}</h1>
<h2>{movi.description}</h2>
<h3>{"⭐".repeat(movi.rating)}</h3>

    </div>
  )
}

export default MoviCart