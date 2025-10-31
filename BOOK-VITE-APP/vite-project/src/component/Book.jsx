import React from 'react'
import './Book.css'
import { useState } from 'react'
const Book = ({book}) => {
    const [count,setCount]=useState(0);
    function increment(){
        setCount(count+1);
    }
    function decrement(){
        if(count>0)
        setCount(count-1);
    }
    function handleAddToCart(){
        alert(`Book "${Book.title}" added to cart!`);
    }
  return (
    <div className='card'>
      <img src={book.image} alt="" width={200} height={200} />

      <h3>Title: {book.title}</h3>
      <h4>Price: ₹{book.price}/-</h4>
      <button onClick={decrement} style={{width:"20px",height:"20px"}}>-</button>
      <span>{count}</span>
      <button onClick={increment} style={{width:"20px",height:"20px"}}>+</button>
      
      <br />
      <button onClick={handleAddToCart} style={{borderRadius:"5px"}}>Add To Cart</button>
    </div>
  )
}

export default Book
