import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
const Body = () => {

  // const [restuarants , setRestuarants] = useState(resList);
  const [restuarants, setRestuarants] = useState([]);
  const [filteredRestuarants, setFilteredRestuarants] = useState([]);

  const [searchText, setSearchText] = useState("");
 console.log("Body Rendered");
  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1795328&lng=78.021112&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setRestuarants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestuarants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  return (restuarants?.length === 0) ? (<Shimmer />) : (
    <div className="body">
      <div className='filter'>
        <div className="search">
          <input type="text" className="search-box" placeholder="Search" 
          value={searchText} onChange={(event)=>{
            setSearchText(event.target.value);
          }}/>
          <button className="search-btn" onClick={()=>{
              const afterfilteredRestuarants = restuarants.filter((item)=>{
                return item.info.name.toLowerCase().includes(searchText.toLowerCase());
              })
              setFilteredRestuarants(afterfilteredRestuarants); // ✅ state update
          }}>Search</button>
        </div>
        <button className="filter-btn" onClick={() => {
          const filteredList = restuarants.filter((item) => parseFloat(item.info.avgRating) > 4.4);
          setFilteredRestuarants(filteredList); // ✅ state update
        }}
        >Top Rated Restaurants</button>
      </div>
      <div className='res-container'>
        {filteredRestuarants?.map((item) => (
          <Link key={item.info.id} to={'/restaurant/'+item.info.id}><RestaurantCard 
            
            resName={item.info.name}
            cuisine={item.info.cuisines.join(", ")}
            rating={item.info.avgRating}
            time={item.info.sla.deliveryTime}
            cost={item.info.costForTwo}
            url={item.info.cloudinaryImageId} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Body;