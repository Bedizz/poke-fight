import { Link,useLoaderData } from 'react-router-dom'
import Slideshow from '../components/slide'
import Slideshow2 from '../components/slide2'
import './home.css'
import React,{useState} from 'react'
import { fetchPokemonData } from "../api/index.js";

export function loader() {
  const data = fetchPokemonData();
  return data; }


const home = () => {
  const Loader = useLoaderData();
  console.log(Loader)
  


  const images = [
    '/Slides/p1.png',
    '/Slides/p2.png',
    '/Slides/p3.png']

    const images2 = [
    '/Slides/p4.png',
    '/Slides/p5.png',
    '/Slides/p6.png']

    

  return (
    <>
    {!Loader && <img src="/Slides/pokeball.jpg" alt="loading"   />}
    <div className='body-container'>
      <div className='left-body-container'>
        <Slideshow images={images} />
        <img src="/Slides/vs.png" alt="pokemon slide show" className='vs-container' />
        <Slideshow2 images2={images2} />
      </div>
      <div className='right-container'>
        <div className='info-container'>
          <Link to={"/pokemon"}><button>Prepare for Battle!</button></Link>
          <p>Choose your pokemon and fight against other pokemons to become the best pokemon trainer!</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default home