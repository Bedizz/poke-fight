import { Link } from 'react-router-dom'
import Slideshow from '../components/slide'
import './home.css'

import React from 'react'

const home = () => {
  const images = [
    '/Slides/p1.png',
    '/Slides/p2.png',
    '/Slides/p3.png']

  return (
    <div className='body-container'>
      <div className='left-body-container'>
        <Slideshow images={images} />
        <img src="/Slides/vs.png" alt="pokemon slide show" className='vs-container' />
        <Slideshow images={images} />
      </div>
      <div className='right-container'>
        <div className='info-container'>
          <Link to={"/pokemon"}><button>Prepare for Battle!</button></Link>
          <p>Choose your pokemon and fight against other pokemons to become the best pokemon trainer!</p>
        </div>
      </div>
    </div>
  )
}

export default home