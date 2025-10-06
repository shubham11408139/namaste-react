import { useEffect ,useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API_URL } from "../utils/constants";

const RestaurantMenu = ()=>{
   const [resInfo , setResInfo ] = useState(null);
//    const [resMenuInfo , setResMenuInfo ] = useState(null);
    
const {resId} = useParams();
    

    useEffect(()=>{
     fetchMenu();   
    },[])    

    const fetchMenu = async ()=>{
      const data = await fetch(`${MENU_API_URL}${resId}&catalog_qa=undefined&submitAction=ENTER`);
      const json = await data.json();
      setResInfo(json?.data)
      console.log(json?.data);
    //   setResMenuInfo(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards)
      
    };
    const {name, cuisines,costForTwoMessage,avgRating } = resInfo?.cards[2]?.card?.card?.info || {}
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card || {}
    // console.log(itemCards);
    if(resInfo == null){
        return <Shimmer />
    }
    return  (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <p>{costForTwoMessage}</p>
            <p>{avgRating}⭐</p>
            <h2>Menu</h2>
            <ul>
                {itemCards?.map((item)=>(
                    <li key={item?.card?.info?.id}>{item?.card?.info?.name} - {(item?.card?.info?.price)/100} Rs. </li>
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