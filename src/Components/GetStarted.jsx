import React from 'react'
import styled from 'styled-components'

const GetStarted = () => {
  return (
    <Container>
      <h2>Get Started</h2>
      <h1>Let's Work Togather</h1>
      <button>Hire Us</button>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  flex-direction: column;
  overflow: hidden;
  background: linear-gradient(96.2deg, #9013f2, #4a9f9e);
  h2 {
    color: white;
    font-size: 36px;
    font-weight: semibold;
  }
  h1 {
    font-size: 52px;
    color: white;
    font-weight: 500;
  }
  button {
    padding: 1.2rem 2.5rem;
    border-radius: 10px;
    border: none;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 50px ;
    background-color:white;
  
`

export default GetStarted
