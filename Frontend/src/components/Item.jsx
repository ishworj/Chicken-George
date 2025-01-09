import React from 'react'
import "../css/item.css"

const Item = ({item}) => {
  const {name,desc,price, imgSrc}=item;

  return (
    <div style={{height:"250px", width:"180px"}} className='item d-flex flex-column justify-content-center item'>
        
        <div className='imgContainer'>
          <img src={imgSrc} alt=""/>
        </div>
       

        <div className='text-center p-2 item-info '>
        <p><b>{name}</b></p>
        <p>{desc}</p>   
        <p className='price'>{price}</p>
        <div><button id='addToCart'>
          Add to cart <i className="fa-solid fa-cart-shopping" style={{color:"rgb(255,69,0)"}}></i>
          </button></div>
        </div>
        

    </div>
  )
}

export default Item