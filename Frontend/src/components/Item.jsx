import React from 'react'

const Item = ({item}) => {
  const {name,desc,price, imgSrc}=item;
  console.log(name);
  console.log(price);
  return (
    <div style={{height:"auto", width:"220px"}} className='d-flex flex-column justify-content- align-items-center border rounded shadow p-2 text-center '>
        <img src={imgSrc} alt="" style={{height:"auto",width:"100%"}}/>
        <p><b>{name}</b></p>
        <p>{desc}</p>   
        <p>{price}</p>

    </div>
  )
}

export default Item