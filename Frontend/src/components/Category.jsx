import React from 'react'
import Item from './Item'

const Category = ({items}) => {
  return (
    <div  >
   {items && items.map((item)=><Item item={item} key={item._id} />)}
   </div>
   )}

export default Category