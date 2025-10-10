import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = ()=>{
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("Header rendered");

  const onlineStatus = useOnlineStatus();
  // useEffect(()=>{
  //   console.log("useEffect called in Header.JS");
  // },[isLoggedIn ])
  return (
    <div className="header">
      <div className='logo-container'>
        <img className="logo" alt="logo" src={LOGO_URL}/>  
      </div>
      <div className='nav-items'>
        <ul>
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>

          <li>Cart</li>
          <button className="login-btn" onClick={() => {
            setIsLoggedIn(!isLoggedIn)}}>{isLoggedIn?"Logout":"Login"}</button>
        </ul>
      </div>
    </div>
  )
} 

export default Header;