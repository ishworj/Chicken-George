import React from 'react'
import Item from './Item'

const Category = ({categoryid,items}) => {
  return (
    <div id={categoryid}>
   { items.map((item,i)=><Item item={item} key={i} />)}
   </div>
   )}

export default Category