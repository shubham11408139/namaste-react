import { useEffect, useState } from "react";
// import { MENU_API_URL } from "./constants";
import mockMenu from "./mockData/resMenu.json"

const useRestaurantMenu = (resId)=>{
    const [resInfo , setResInfo ] = useState(null);
    useEffect(()=>{
        fetchData();   
    },[])    

    const fetchData = async ()=>{
    //   const data = await fetch(`${MENU_API_URL}${resId}`);
    //   const json = await data?.json();
   // Instead of fetching from API, directly use mock
      const json = mockMenu;

      setResInfo(json?.data)
    };
    return resInfo;
}

export default useRestaurantMenu;