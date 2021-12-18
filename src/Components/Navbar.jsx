import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <NavContainer>
      <span>Agency</span>
      <nav>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact us</a>
        <a href="/">Resources</a>
      </nav>
      <button>Hire Us</button>
    </NavContainer>
  )
}

const NavContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 36px;
    font-weight: bold;
  }
  nav a {
    text-decoration: none;
    color: black !important;
    margin-left: 50px;
  }
  button {
    padding: 10px 30px;
    background: transparent;
    border-radius: 8px;
    border: 2px solid #000;
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
  }
`

export default Navbar
