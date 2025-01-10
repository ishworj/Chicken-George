import React from 'react'
import { Link } from "react-router";
import {  Routes, Route } from "react-router-dom";
import Hero from './Hero';
import Menu from './Menu';
import About from './About';
import "../css/landingPage.css"
const LandingPage = () => {
  return (
    <>
    {/* header */}
        <header>
        <div className="d-flex  justify-content-between gap-5 ">
        <div className="logo">
            <img src="logo.png" alt="chickenGeorge"  />
        </div>

        <nav className='d-flex gap-4 align-items-center fs-10'>
        <Link to={{ pathname:"/menu"}}>Our Products</Link>
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

        <Routes>
        <Route path="*" element={<Hero/>}></Route >
        <Route path="/menu" element={<Menu />}></Route >
        <Route path='/about' element={<About/>}></Route>
        </Routes>

    {/* footer  */}
    <section className="bg-dark text-center p-5 ">
		<div >
			<h3 className="text-white">SUBSCRIBE OUR NEWSLETTERS NOW</h3>
			<form action="#" method="Post" className='d-flex justify-content-center'>
				<input type="text" name="text" placeholder="Enter Your Email Id" className='p-2 mx-2 ' />
				<button type="button" className="btn btn-default bg-white ">Subscribe<i className="fa fa-envelope"></i></button>
			</form>
		</div>
	</section>
    <div>
    
        <footer className='bg-dark d-flex flex-column text-white px-5 py-3 '>
        <div className='d-flex justify-content-around'>
        <div>
                <h5>Shop</h5>
                <ul className='p-0'>
                    <li>Login</li>
                    <li><Link to={{ pathname:"/menu"}}>OurProducts</Link></li>
                    <li><Link to={{ pathname:"/menu"}}>Order Now</Link></li>
                </ul>
            </div>
            <div>
                <h5>Links</h5>
                <ul className='p-0'>
                    <li><Link to={{ pathname:"/"}}>Home</Link></li>
                    <li>Faqs</li>
                    <li><Link to={{ pathname:"/about"}}>About us</Link></li>
                </ul>
            </div>

            <div>
                <h5>Social</h5>
                <ul className='p-0'>
                    <li>Instagram</li>
                    <li>Phone</li>
                    <li>Mail</li>
                </ul>
            </div>

        </div>

        <div className='text-center'>
            <span>@ Copy right all reserved 2025 || Chicken george</span>
        </div>

        </footer>

    </div>
    </>
  )
}

export default LandingPage