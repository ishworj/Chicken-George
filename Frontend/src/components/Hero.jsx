import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import "../css/hero.css"
import { Link } from "react-router";

const Hero = () => {
  return (
    <>

      <Carousel className='c-carousel' >
      <Carousel.Item interval={3000}  className='c-item'>
        <img
          src="slide1.jpg"
          alt="first slide"
        />
        <Carousel.Caption className='slide-info'>
          <h3>Delicious Hot Cooked Chicken </h3>
          <p>Succulent and tender, this chicken is freshly cooked and ready to satisfy your cravings.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000} className='c-item'>
        <img
          src="slide2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className='slide-info'>
          <h3>Hot Cooked Chicken - Perfectly Prepared</h3>
          <p>Hot, juicy, and packed with flavor, this chicken is sure to leave you wanting more.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='c-item'>
        {/* Image for the third slide */}
        <img
          src="slide3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className='slide-info'>
          <h3>Fresh Raw Chicken - Ready to Cook</h3>
          <p>
          Fresh, high-quality raw chicken that’s perfect for any dish you’re preparing.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div className="overlay"></div>

    <div class="content d-flex flex-column justify-content-center align-items-center text-center">
            <h3>OrderOnline - Pickup or Delivery</h3>
            <h3>Cooked chicken items and fresh chicken meat</h3>
            <p>Original chicken is the best chicken. </p>
            <p>Location: Southgate Shopping Center, Sylvania</p>
            <button className='p-2 rounded-pill text-danger fw-bold'>Order Online</button>
        </div>


        <section className='browseMenu d-flex flex-row justify-content-around m-5'>

            <div className=' browsemenu-photo overflow-hidden'>
              <h1 className='text-center'>Browse menu</h1>
              <img src="/slide2.jpg" alt="" style={{height:'100% ',width:"100%"}} />
            </div>

            <div className='featured-products'>

              <h1 className='text-center pb-2'>Our featured Products</h1>
              <div className='d-flex justify-content-between gap-4 text-center mx-5 ' >

                <div className='f-item'>
                <img src="/HotFood/tenderlions.jpg" 
                alt="" /> 
                <h4>Tenderlions</h4>
                </div>
                <div className='f-item'>
                <img src="/HotFood/tenderlions.jpg" 
                alt="" /> 
                <h4>Tenderlions</h4>
                </div>
                <div className='f-item'>
                <img src="/HotFood/tenderlions.jpg" 
                alt="" /> 
                <h4>Tenderlions</h4>
                </div>
                
                
              </div>

              <div className='d-flex justify-content-center align-items-center m-2'>
              <div className='text-center'>
                <h3>
                  Get what you want <br />all yours
                </h3>
              <button className='goToMenu btn btn-dark fs-4' >
              <Link to={{ pathname:"/menu"}} className='text-white'>Browse here</Link>
              </button>
              </div>
              </div>

              
            </div>
        </section>


      <section className='faqs  bg-dark p-5 pt-2'>
        
        <h1 className='text-center text-white py-0'>FAQ<sub>s</sub></h1>

        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header >what time do you open ?</Accordion.Header>
        <Accordion.Body>
          we are open 7-5 weekdays and 7-4:30 on weekends. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Is this chicken hallal </Accordion.Header>
        <Accordion.Body>
          All our chickens are deleverd form stegels which provides only halal chicken
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Is this chicken hallal </Accordion.Header>
        <Accordion.Body>
          All our chickens are deleverd form stegels which provides only halal chicken
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Is this chicken hallal </Accordion.Header>
        <Accordion.Body>
          All our chickens are deleverd form stegels which provides only halal chicken
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

      </section>

    </>
  
  );
};

export default Hero;
