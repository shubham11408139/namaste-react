import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
const Body = ()=>{
  
  // const [restuarants , setRestuarants] = useState(resList);
  const [restuarants , setRestuarants] = useState([]);
  
  useEffect(()=>{
    console.log("useEffect called");
    fetchData();
  },[])

  const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1795328&lng=78.021112&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
   
    setRestuarants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }


if(restuarants.length === 0){
  return <h1>Loading....</h1>
}

  const filterTopRated = () => {
    const filteredList = restuarants.filter((item) => parseFloat(item.info.avgRating)  > 4.4);
    setRestuarants(filteredList); // ✅ state update
  };
  return (
    <div className="body">
      <div className='filter'>
        <button className="filter-btn" onClick={filterTopRated}
          >Top Rated Restaurants</button>
        </div>
        <div className='res-container'>
          {restuarants.map((item)=>(
            <RestaurantCard 
              key={item.info.id} 
              resName={item.info.name}
              cuisine={item.info.cuisines.join(", ")}
              rating={item.info.avgRating}
              time={item.info.sla.deliveryTime}
              cost={item.info.costForTwo} 
              url={item.info.cloudinaryImageId}/>
            ))}
        </div>
    </div>
  )
}

export default Body;