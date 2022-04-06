import React from 'react'
import {Link} from 'react-router-dom'
import './MoviCart.css'
const MoviCart = ({movi}) => {
  return (
    <div className='cart'>
     <Link to={`/movi/${movi.id}`}>
        <img src={movi.poster} alt="img"/> 
     </Link>
      

<h1>{movi.titre}</h1>
<h2>{movi.description}</h2>
<h3>{"⭐".repeat(movi.rating)}</h3>

    </div>
  )
}

export default MoviCart