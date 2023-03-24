import React, { useState,useEffect } from 'react'
import NavBar from '../components/NavBar'
import background from "../assets/home.jpg"
import movielogo from "../assets/homeTitle.webp"
import { AiOutlineInfoCircle } from "react-icons/ai"
import { FaPlay } from 'react-icons/fa'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// import { getGenres } from '../store'
import { NetflixSlice } from '../store'



function Netflix() {
const [isScrolled, SetIsScrolled] = useState(false)
const navigate =useNavigate()

const dispatch= useDispatch()
const actions = NetflixSlice.actions

// useEffect(() => {
// dispatch(actions.getGenres())
// }) // i removed dependency array from useEffect hook -> {()=>{},[dependency array]}



  window.onscroll = () => {
    SetIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }

  return (
    <Container>
      <NavBar isScrolled={isScrolled} />
      <div className="hero">
        <img src={background} alt="background" className='backround-image' />
        <div className="container">
          <div className="logo">
            <img src={movielogo} alt="movielogo" />
          </div>
          <div className="buttons flex">
            <button className='flex j-center a-center' onClick={()=>navigate("/player")}>
              <FaPlay />Play
            </button>

            <button className='flex j-center a-center'>
              <AiOutlineInfoCircle />More info
            </button>
          </div>
        </div>

      </div>
    </Container>
  )
}


const Container = styled.div`
background-color: black;
.hero{
  position: relative;
  .background-image{
    filter: brightness(60%);
  }
  img{
    height: 100vh;
    width: 100vw;
  }
  .container{
    position: absolute;
    bottom: 5rem;
  .logo{
    img{
      height: 100%;
      width: 100%;
      margin-left: 5rem;
    }
  }
  .buttons{
    margin: 5rem;
    gap: 2rem;
    button{
      font-size: 1.4rem;
      gap: 1rem;
      border-radius: 0.3rem;
      padding: 0.5rem;
      padding-left: 2rem;
      padding-right: 2.5rem;
      border: none;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      &:hover{
        opacity: 0.8;
      }
      &:nth-of-type(2){
        background-color: rgba(109,109,110,0.7);
        color: white;
        svg{
          font-size: 1.8rem;
        }
      }

    }
  }
  }

}
`


export default Netflix