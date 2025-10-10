import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    const [onlineStatus,setOnlineStatus] = useState(true);
    //check if user is online or offline
    useEffect(()=>{
       window.addEventListener("offline",()=>{
         setOnlineStatus(false);
       })
       window.addEventListener("online",()=>{
        setOnlineStatus(true);
       })
    },[])

    return onlineStatus;
}

export default useOnlineStatus;