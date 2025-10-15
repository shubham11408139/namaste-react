import { useEffect, useState } from "react";

const useRestaurantList =()=>{
    const [restaurants, setRestuarants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

        useEffect(()=>{
            fetchData();
        },[])

       const fetchData = async () => {
        try{
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1795328&lng=78.021112&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            console.log("resturantList",json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants )
            setRestuarants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setIsLoading(false);
        }catch(error){
            console.error("Error fetching restaurant list:", error);
            setIsLoading(false);
        }
           
       }
       return { restaurants, isLoading };
}

export default useRestaurantList;