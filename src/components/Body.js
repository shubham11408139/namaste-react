import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
  const { restaurants, isLoading } = useRestaurantList();
  const [filteredRestuarants, setFilteredRestuarants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setFilteredRestuarants(restaurants);
  }, [restaurants])

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) return <h1>🔴 Offline, Please check your internet connection!!</h1>
  
  if (isLoading) return <Shimmer />;
  return  (
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
          <Link key={item.info.id} to={'/restaurant/'+item.info.id}>
            <RestaurantCard 
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