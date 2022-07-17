import "./navbar.css"
import { Link } from "react-router-dom"
import Logo from "../images/Logo.svg";
import Discount from "../images/Discount.svg";
import Graph from "../images/Graph.svg";
import Message from "../images/Message.svg";
import Notification from "../images/Notification.svg";
import Settings from "../images/Settings.svg";
import LogOut from "../images/LogOut.svg";
import Home from "../images/Home.svg"

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
       <img src={Logo} alt="" />
        <ul className="nav-links" >

          <Link to='/' className='home'>
            <li>
              <img src={Home} alt="" />
            </li>
          </Link>

          <Link to='/discount' className='discount'>
            <li>
              <img src={Discount} alt="" />
            </li>
          </Link>

          <Link to='/graph' className='graph'>
            <li>
              <img src={Graph} alt="" />
            </li>
          </Link>

          <Link to='/message' className='message'>
            <li>
              <img src={Message} alt="" />
            </li>
          </Link>

          <Link to='/notification' className='notification'>
            <li>
              <img src={Notification} alt="" />
            </li>
          </Link>

          <Link to='/settings' className="settings">
            <li>
              <img src={Settings} alt="" />
            </li>
          </Link>

          <Link to='/logout' className="logout">
            <li>
              <img src={LogOut} alt="" />
            </li>
          </Link>
        </ul>
      </nav>
    </>
  )
}
export default Navbar
