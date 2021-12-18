import React from 'react'
import styled from 'styled-components'

const Hero = () => {
  return (
    <Container>
      <div className="left">
        <h1>
          Your <span className="bold gradient">partners</span> in Creating And
          Growing🚀
          <span className="bold"> Brands</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A dolores
          quia dicta impedit recusandae neque itaque nulla cum ducimus
          dignissimos eveniet quod voluptate odit, quas iure suscipit repellat
          maiores! Dolor!
        </p>
        <div className="hor">
          <div>
            <button className="gets">Get Started</button>
          </div>
          <div className="watch">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 2.5C24.6413 2.5 29.0925 4.34374 32.3744 7.62563C35.6563 10.9075 37.5 15.3587 37.5 20C37.5 24.6413 35.6563 29.0925 32.3744 32.3744C29.0925 35.6563 24.6413 37.5 20 37.5C15.3587 37.5 10.9075 35.6563 7.62563 32.3744C4.34374 29.0925 2.5 24.6413 2.5 20C2.5 15.3587 4.34374 10.9075 7.62563 7.62563C10.9075 4.34374 15.3587 2.5 20 2.5ZM20 35C23.9782 35 27.7936 33.4196 30.6066 30.6066C33.4196 27.7936 35 23.9782 35 20C35 16.0218 33.4196 12.2064 30.6066 9.3934C27.7936 6.58035 23.9782 5 20 5C16.0218 5 12.2064 6.58035 9.3934 9.3934C6.58035 12.2064 5 16.0218 5 20C5 23.9782 6.58035 27.7936 9.3934 30.6066C12.2064 33.4196 16.0218 35 20 35ZM16.25 13.75C17.0833 13.75 17.5 14.1667 17.5 15V25C17.5 25.8333 17.0833 26.25 16.25 26.25C15.4167 26.25 15 25.8333 15 25V15C15 14.1667 15.4167 13.75 16.25 13.75ZM23.75 13.75C24.5833 13.75 25 14.1667 25 15V25C25 25.8333 24.5833 26.25 23.75 26.25C22.9167 26.25 22.5 25.8333 22.5 25V15C22.5 14.1667 22.9167 13.75 23.75 13.75Z"
                fill="black"
              />
            </svg>
            <span>Watch Video</span>
          </div>
        </div>
      </div>

      <div className="right">
        <img
          className="mimage"
          width="500"
          src="https://images.pexels.com/photos/2467506/pexels-photo-2467506.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="img"
        />
        <div className="box">
          <span className="heading">Solutiuons for Buisness 👋</span>
          <span>make your buisness professional with us</span>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  .mimage {
    /* box-shadow: -5px -5px 10px linear-gradient(#de6262, #ffb88c); */
    box-shadow: -5px -5px 10px #de6262;
  }
  .gets {
    box-shadow: -5px -5px 5px #9013f2;
  }
  .miamge::before {
    content: '';
    position: absolute;
    /* background: linear-gradient(#de6262, #ffb88c); */
    filter: blur(20px);
  }
  .gradient {
    /* filter: blur(2px); */
    background: linear-gradient(90deg, #de6262, #ffb88c);
  }
  .right {
    img {
      margin-left: 150px;
      position: relative;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .box {
    width: 350px;
    position: absolute;
    bottom: 1;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: white;
    background-color: black;
    .heading {
      font-weight: bold;
      font-size: 24px;
    }
    span {
      font-size: 15px;
    }
  }
  .arrow-1 {
    position: absolute;
    top: 0;
    left: 5;
  }
  .Arrow-2 {
    position: absolute;
    left: 25;
  }
  .left {
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 50px 0;

    h1 {
      font-weight: normal;
      font-size: 64px;
      line-height: 145%;
    }
    p {
      font-size: 18px;
      line-height: 145%;
      color: gray;
    }
    .bold {
      font-weight: bold;
    }
    .hor {
      display: flex;
      align-items: center;
      button {
        padding: 15px 25px;
        background-color: black;
        border: none;
        cursor: pointer;
        color: white;
        font-weight: bold;
        border-radius: 10px;
      }

      .watch {
        display: flex;
        align-items: center;
        margin-left: 50px;
        cursor: pointer;
        span {
          margin-left: 10px;
        }
      }
    }
  }
`

export default Hero
