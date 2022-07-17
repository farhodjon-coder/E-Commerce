import React from "react"
import Data from "../Data/Data.jsx";
import "./Home.css";

const Home = () => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`

  return (
    <div className="Home">
      <div className="header">
        <div className="left">
          <h1>Jaegar Resto</h1>
          <p>{date}</p>
        </div>
        <div className="right">
        
          <input placeholder="Search for food, coffe, etc.." />
        </div>
      </div>

      <section className='home'>

          {Data.map((props) => {
            return(
              <div className="product">
                <div className="product_image">
                  <img src={props.img} alt="" />
                </div>
                <div className="product_info">
                  <h2 className="product_title">{props.title}</h2>
                  <h3 className="product_price">{props.price}</h3>
                  <p className="product_quantity">{props.quantity}</p>
                </div>
              </div>
            )
          })}    
      </section>
    </div>
  )
}
export default Home
