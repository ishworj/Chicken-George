import React from 'react'

const Item = ({item}) => {
  const {name,desc,price, imgSrc}=item;
  console.log(name);
  console.log(price);
  return (
    <div style={{height:"275px", width:"220px"}} className='item d-flex flex-column justify-content-between rounded shadow'>
      
        <img src={imgSrc} alt="" style={{height:"65%",width:"100%"}}/>

        <div className='text-center p-1 '>
        <p><b>{name}</b></p>
        <p>{desc}</p>   
        <p>{price}</p>
        </div>
        

    </div>
  )
}

export default Item