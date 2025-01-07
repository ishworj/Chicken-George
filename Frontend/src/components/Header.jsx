import React from 'react'
import  '../css/header.css'

const Header = () => {
  return (
    <>
    <header>
       <div className="d-flex  justify-content-between gap-5">
       <div className="logo">
            <img src="logo.png" alt="chickenGeorge" />
        </div>

        <nav className='d-flex gap-4 align-items-center fs-10'>
            <a href="">OurProducts</a>
            <a href="">Catering</a>
            <a href="">Contact</a>
        </nav>

       </div>
        <div className="header-right d-flex gap-4">
            <a href="">OrderNow</a>
            <a href=""><i className="fa-regular fa-user"></i></a>
            <a href=""><i className="fa-solid fa-cart-shopping"></i></a>
        </div>
    </header>
    </>
)
}

export default Header