import { useEffect, useState } from "react";

const User = ({name,location,contact})=>{
    const [count, setCount] = useState(0)
    
   
    return (
        <div className="user-about-card m-4 p-4 bg-gray-50 rounded-lg">
            <h2>Name:{name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: {contact}</h4>
            <h4>Count:{count}</h4>
          

        </div>
    )
}
export default User;