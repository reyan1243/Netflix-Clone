import React, { useState } from 'react'
import firebaseAuth from "../utils/firebase-config"
import styled from 'styled-components'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


export default function Login() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: ""
  })
  const navigate = useNavigate()

  const handleLogIn = async () => {
    try {
      const { email, password } = formValues
      await signInWithEmailAndPassword(firebaseAuth, email, password)
      console.log(formValues)
    } 
    catch (error) {
      console.log(error);
    }
  }



  onAuthStateChanged(firebaseAuth, (currentUser) => {
     if (currentUser) 
      navigate("/netflix")
  })

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            
            <div className="title">
              <head>Login</head>
            </div>

            <div className="container flex column">
              <input type="email" placeholder='email adress' name='email' value={formValues.email} onChange={(e) => setFormValues({
                ...formValues, [e.target.name]: e.target.value,
              })} />

              
              <input type="password" placeholder='password' name='password' value={formValues.password} onChange={(e) => setFormValues({
                ...formValues, [e.target.name]: e.target.value,
              })} />
            
              <button onClick={()=>handleLogIn(true)}>Log In</button>

            </div>
          
          </div>

        </div>
      </div>


    </Container>
  )
}

const Container = styled.div`
position: relative;
.content{
  color:white;
  position:absolute;
  top:0;
  left:0;
  background-color:rgba(0,0,0,0.5);
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows:12vh;
  .form-container{
    gap:2rem;
    height: 85vh;
    .form{
      gap:2rem;  
      padding:2rem;
      background-color: #000000b0;
      width: 25vw;
      color: white;
      .container{
        gap: 2rem;
        input{
          padding: 0.5rem 1rem;
          width: 15rem  ;
        }
      }
      button{
      padding:0.5rem 1rem;
      background-color:#e50914;
      border: none;
      border-radius:0.2rem; 
      cursor:pointer;
      color:white;
      font-weight:bolder;
      font-size: 1.05rem;
    }      
    }
  }
}

`




