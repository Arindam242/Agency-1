import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer>
      <div className="left">
        <p>Our Policy</p>
        <p>Terms and Conditions</p>
      </div>
      <div className="right">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.643 4.93708C22.808 5.30708 21.911 5.55708 20.968 5.67008C21.941 5.08787 22.669 4.17154 23.016 3.09208C22.1019 3.63507 21.1014 4.01727 20.058 4.22208C19.3564 3.47294 18.4271 2.9764 17.4143 2.80955C16.4016 2.6427 15.3621 2.81487 14.4572 3.29933C13.5524 3.78379 12.8328 4.55344 12.4102 5.48878C11.9875 6.42412 11.8855 7.47283 12.12 8.47208C10.2677 8.37907 8.45564 7.89763 6.80144 7.05898C5.14723 6.22034 3.68785 5.04324 2.51801 3.60408C2.11801 4.29408 1.88801 5.09408 1.88801 5.94608C1.88757 6.71307 2.07644 7.46832 2.43789 8.14481C2.79934 8.8213 3.32217 9.39812 3.96001 9.82408C3.22029 9.80054 2.49688 9.60066 1.85001 9.24108V9.30108C1.84994 10.3768 2.22204 11.4195 2.90319 12.2521C3.58434 13.0847 4.53258 13.656 5.58701 13.8691C4.9008 14.0548 4.18135 14.0821 3.48301 13.9491C3.78051 14.8747 4.36001 15.6841 5.14038 16.264C5.92075 16.8439 6.86293 17.1653 7.83501 17.1831C6.18484 18.4785 4.1469 19.1812 2.04901 19.1781C1.67739 19.1782 1.30609 19.1565 0.937012 19.1131C3.06649 20.4823 5.54535 21.2089 8.07701 21.2061C16.647 21.2061 21.332 14.1081 21.332 7.95208C21.332 7.75208 21.327 7.55008 21.318 7.35008C22.2293 6.69105 23.0159 5.87497 23.641 4.94008L23.643 4.93708Z"
            fill="#F8F8F8"
          />
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2_172)">
            <path
              d="M24 12.0735C24 5.40454 18.627 -0.00146484 12 -0.00146484C5.37001 3.51563e-05 -0.00299072 5.40454 -0.00299072 12.075C-0.00299072 18.1005 4.38601 23.0955 10.122 24.0015V15.564H7.07701V12.075H10.125V9.41253C10.125 6.38704 11.9175 4.71603 14.658 4.71603C15.972 4.71603 17.3445 4.95154 17.3445 4.95154V7.92154H15.831C14.3415 7.92154 13.8765 8.85303 13.8765 9.80853V12.0735H17.2035L16.6725 15.5625H13.875V24C19.611 23.094 24 18.099 24 12.0735Z"
              fill="#F8F8F8"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_172">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 1.719C0 0.7695 0.789 0 1.7625 0H22.2375C23.211 0 24 0.7695 24 1.719V22.281C24 23.2305 23.211 24 22.2375 24H1.7625C0.789 24 0 23.2305 0 22.281V1.719ZM7.4145 20.091V9.2535H3.813V20.091H7.4145ZM5.6145 7.773C6.87 7.773 7.6515 6.942 7.6515 5.901C7.629 4.8375 6.8715 4.029 5.6385 4.029C4.4055 4.029 3.6 4.839 3.6 5.901C3.6 6.942 4.3815 7.773 5.5905 7.773H5.6145ZM12.9765 20.091V14.0385C12.9765 13.7145 13.0005 13.3905 13.0965 13.1595C13.356 12.513 13.9485 11.8425 14.9445 11.8425C16.248 11.8425 16.7685 12.8355 16.7685 14.2935V20.091H20.37V13.875C20.37 10.545 18.594 8.997 16.224 8.997C14.313 8.997 13.4565 10.047 12.9765 10.7865V10.824H12.9525C12.9605 10.8115 12.9685 10.799 12.9765 10.7865V9.2535H9.3765C9.4215 10.2705 9.3765 20.091 9.3765 20.091H12.9765Z"
            fill="#F8F8F8"
          />
        </svg>
      </div>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  width: 100%;
  height: 100px;
  background-color: #1b1b1b;
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin-top: 50px;
  .left {
    color: white;
    margin-left: 50px;
    display: flex;

    p {
      margin: 0 20px;
      font-weight: bold;
    }
  }
  .right {
    svg {
      margin: 0 35px;
    }
  }
`

export default Footer
