import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../css/hero.css"

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

    </>
  
  );
};

export default Hero;
