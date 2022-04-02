import React from 'react'
import { Navbar  } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import './MyNav.css';


const MyNav = ({hdTitre , hdRate }) => {
    const ratingChanged = (newRating) => {
      hdRate(newRating)

      }
       const hdChange=(e) =>{
         hdTitre(e.target.value)
       }
  return (
    <div >
      

<Navbar className='nav'  bg="black" variant="black">


    <section className='nav' >
    <h1 className="title">
  <span>M</span>
  <span>o</span>
  <span>v</span>
  <span>i</span>
  <span>e</span>
  <span>s</span>
 
</h1>
    <input className='input' type="text" placeholder='search '  onChange={hdChange}/>
    
  <ReactStars
  classNames={"star"}
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />
  </section>

  </Navbar>
 

    </div>
  )
}

export default MyNav