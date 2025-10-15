import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState ,useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const { restaurants, isLoading } = useRestaurantList();
  const [filteredRestuarants, setFilteredRestuarants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const {loggedInUser,setUserName} = useContext(UserContext);

  const RestauantCardPromoted = withPromotedLabel(RestaurantCard);
  useEffect(() => {
    setFilteredRestuarants(restaurants);
  }, [restaurants])

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) return <h1>🔴 Offline, Please check your internet connection!!</h1>
  
  if (isLoading) return <Shimmer />;
  return  (
    <div className="body">
      <div className='filter flex'>
        <div className="search m-4 p-4">
          <input type="text" className="border border-solid border-black m-1 p-1" placeholder="Search" 
          value={searchText} onChange={(event)=>{
            setSearchText(event.target.value);
          }}/>
          <button className="px-4 py-2 bg-green-200 m-4 rounded-lg cursor-pointer" onClick={()=>{
              const afterfilteredRestuarants = restaurants.filter((item)=>{
                return item.info.name.toLowerCase().includes(searchText.toLowerCase());
              })
              setFilteredRestuarants(afterfilteredRestuarants); // ✅ state update
          }}>Search</button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button className="px-4 py-2 bg-gray-200 m-4 rounded-lg cursor-pointer" onClick={() => {
            const filteredList = restaurants.filter((item) => parseFloat(item.info.avgRating) > 4.4);
            setFilteredRestuarants(filteredList); // ✅ state update
          }}
          >Top Rated Restaurants</button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input className="border border-black p-2" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
          </div>
      </div>
      <div className='flex flex-wrap'>
        {filteredRestuarants?.map((item) => (
          <Link key={item.info.id} to={'/restaurant/'+item.info.id}>

            {item.info.isOpen ? (<RestauantCardPromoted resName={item.info.name}
              cuisine={item.info.cuisines.join(", ")}
              rating={item.info.avgRating}
              time={item.info.sla.deliveryTime}
              cost={item.info.costForTwo}
              url={item.info.cloudinaryImageId}/>) :

            (<RestaurantCard 
              resName={item.info.name}
              cuisine={item.info.cuisines.join(", ")}
              rating={item.info.avgRating}
              time={item.info.sla.deliveryTime}
              cost={item.info.costForTwo}
              url={item.info.cloudinaryImageId} />
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Body;