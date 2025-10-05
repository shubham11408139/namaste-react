import { CDN_URL } from "../utils/constants";


const RestaurantCard = ({resName, cuisine, rating, time, cost,url})=>{
  return (
    <div className="res-card" style={{backgroundColor:"#f0f0f0", border:"1px solid #e0e0e0", borderRadius:"8px"}}>
      <img className="res-logo" alt="logo" src={CDN_URL+url}></img>
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating}⭐ | {time} | {cost}</h4>
    </div>
  )
}

export default RestaurantCard;