import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = ()=>{    
const {resId} = useParams();
const resInfo = useRestaurantMenu(resId);

    // const {name, cuisines,costForTwoMessage,avgRating } = resInfo?.cards[2]?.card?.card?.info || {}
    // const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card || {}

    // console.log("resInfo",resInfo);
    // 💡 Adjusted structure for mock data
  const { name, cuisines, costForTwoMessage, avgRating, menu } = resInfo || {};
  const itemCards = Object.values(menu?.items || {});
    // console.log(itemCards);
    if(resInfo == null){
        return <Shimmer />
    }
    return  (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")}</p>
            <p>{costForTwoMessage}</p>
            <p>{avgRating}⭐</p>
            <h2>Menu</h2>
            <ul>
                {itemCards?.map((item)=>(
                    <li key={item.id}>
                        {item.name} — ₹{item.price / 100} Rs.
                    </li>
                    // <li key={item?.card?.info?.id}>{item?.card?.info?.name} - {(item?.card?.info?.price)/100} Rs. </li>
                ))}
                {/* <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
                <li>Lassi</li> */}
            </ul>
        </div>
    )
} 
export default RestaurantMenu;