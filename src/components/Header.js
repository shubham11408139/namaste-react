import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = ()=>{
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("Header rendered");

  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  // console.log("data is:", data);
  // useEffect(()=>{
  //   console.log("useEffect called in Header.JS");
  // },[isLoggedIn ])
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2 sm:bg-yellow-50 lg:bg-green-50">
      <div className='logo-container'>
        <img className="w-28" alt="logo" src={LOGO_URL}/>  
      </div>
      <div className='flex items-center'>
        <ul className="flex p-4 m-4">
          <li className="px-3">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-3"><Link to="/">Home</Link></li>
          <li className="px-3"><Link to="/about">About Us</Link></li>
          <li className="px-3"><Link to="/contact">Contact Us</Link></li>
          <li className="px-3"><Link to="/grocery">Grocery</Link></li>

          {/* <li className="px-3">Cart</li> */}
          <button className="login-btn" onClick={() => {
            setIsLoggedIn(!isLoggedIn)}}>{isLoggedIn?"Logout":"Login"}
          </button>
            <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  )
} 

export default Header; 