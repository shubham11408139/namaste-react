import { CDN_URL } from "../utils/constants";


const RestaurantCard = ({resName, cuisine, rating, time, cost,url})=>{
  return (
    <div className="m-3 p-3 w-[225px] h-[370px] rounded-lg shadow-md border border-gray-200  bg-gray-100
                hover:shadow-lg hover:border-gray-300 hover:scale-105  hover:bg-gray-200
                transition-all duration-300 ease-in-out cursor-pointer" >
                  {/* style={{backgroundColor:"#f0f0f0", border:"1px solid #e0e0e0", borderRadius:"8px"}} */}
      <img className="rounded-lg w-full h-1/2" alt="logo" src={CDN_URL+url}></img>
      <h3 className="font-bold py-4 text-lg">{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating}⭐ | {time} | {cost}</h4>
    </div>
  )
}


//Higher Order Component
// input - RestaurantCard
// output - RestaurantCard with some extra props
export const withPromotedLabel = (RestaurantCard)=>{
  return ({resName, cuisine, rating, time, cost,url})=>{
    return (
      <div>
        <label className="absolute bg-black text-white p-1 m-2 rounded-md">Promoted</label>
        <RestaurantCard {...{resName, cuisine, rating, time, cost,url}}/>
      </div>
    )
  }
}

export default RestaurantCard;