import React from 'react'
import "./Basket.css";

const Basket = () => {
  return (
    <div className='Basket'>
      <h1>Orders #34562</h1>
      <div className='buttons'>
        <button>Dine In</button>
        <button>To Go</button>
        <button>Delivery</button>
      </div>

      <div className='Item-Qty-Price'>
        <div className='Item'>
          <h2>Item</h2>
        </div>
        <div className='Qty-Price'>
          <h2>Qty</h2>
          <h2>Price</h2>
        </div>
      </div>

      <hr />
    </div>
  )
}

export default Basket
