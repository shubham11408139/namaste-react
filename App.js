import React from 'react';
import ReactDOM from 'react-dom/client';


/**
 * Food Delivery App have:
 * Header
 *   - Logo
 *   - Nav Items
 * Body
 *   - SearchBar
 *   - RestaurantContainer
 *        - RestaurantCard
 *         - Image
 *         - Name
 *         - Cusine
 *         - Rating
 *         - Delivery Time
 * Footer(Copyright, Links, Address, Contact)
 */
const Header = ()=>{
  return (
    <div className="header">
      <div className='logo-container'>
        <img className="logo" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUGz0WshFYnlwlqP_fs3ErIppUvpuaYfTrZQ&s"/>  
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}


const RestaurantCard = ({resName, cuisine, rating, time, cost,url})=>{
  return (
    <div className="res-card" style={{backgroundColor:"#f0f0f0", border:"1px solid #e0e0e0", borderRadius:"8px"}}>
      <img className="res-logo" alt="logo" src={url}></img>
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating}| {time} | {cost}</h4>
    </div>
  )
}

const resList = [
  {
    id: 1,
    resName: "Bhagwati Bakery",
    cuisine: "Cake, North Indian",
    rating: "4.2⭐",
    time: "38 mins",
    cost: "₹300 for two",
    url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mt2aggiscfl3yviatwng"
  },
  {
    id: 2,
    resName: "Chihar Foods",
    cuisine: "Biryani, Fast food",
    rating: "4.3⭐",
    time: "20 mins",
    cost: "₹400 for two",
    url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv"
  },
  {
    id: 3,
    resName: "Hotel Sainath",
    cuisine: "Thali, North Indian",
    rating: "4.5⭐",
    time: "30 mins",
    cost: "₹500 for two",
    url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vkhcohhmqfczycw9vsar"
  },
  {
    id: 4,
    resName: "Bikanervala",
    cuisine: "North Indian, Sweets",
    rating: "4.4⭐",
    time: "25 mins",
    cost: "₹600 for two",
    url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/enj3srsnhbltbom2ovvh"
  },
  {
    id: 5,
    resName: "Haldiram's",
    cuisine: "North Indian, Sweets",
    rating: "4.6⭐",
    time: "20 mins",
    cost: "₹700 for two",
    url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2274f59cb8efcfab1f446b195bcbda3b"
  },
  {
    id: 6,
    resName: "Moti Mahal Delux",
    cuisine: "North Indian, Mughlai",
    rating: "4.3⭐",
    time: "35 mins",
    cost: "₹800 for two",
    url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mt2aggiscfl3yviatwng"
  },
  {
    id: 7,
    resName: "Kailash Parbat",
    cuisine: "North Indian, Mughlai",
    rating: "4.5⭐",
    time: "30 mins",
    cost: "₹900 for two",
    url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/76a05b39545d5a2bf80d6a3e3e46544a"
  },
  {
    id: 8,
    resName: "Sarvi Restaurant",
    cuisine: "Hyderabadi, Biryani",
    rating: "4.2⭐",
    time: "40 mins",
    cost: "₹500 for two",
    url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/510fc7e0a265c4c71ef10f0406583373"
  },
  {
    id: 9,
    resName: "Paradise Biryani",
    cuisine: "Hyderabadi, Biryani",
    rating: "4.7⭐",
    time: "45 mins",
    cost: "₹600 for two",
    url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/02bf3b7d4d7e34b3d97b6892bf3dd9f9"
  },
  {
    id: 10,
    resName: "Biryani Blues",
    cuisine: "Hyderabadi, Biryani",
    rating: "4.4⭐",
    time: "30 mins",
    cost: "₹700 for two",
    url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0f86198cf95dc7714c9151ae8424d63"
  }
];




const Body = ()=>{
  return (
    <div className="body">
      <div className='search'>Search</div>
        <div className='res-container'>
          {resList.map((item)=>(
            <RestaurantCard 
              key={item.id} 
              resName={item.resName}
              cuisine={item.cuisine}
              rating={item.rating}
              time={item.time}
              cost={item.cost} 
              url={item.url}/>
            ))}
        </div>
    </div>
  )
}


const AppLayout = ()=>{
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


































// const title = (
//   <h1 className="head" tabIndex="2">
//     Namaste React using JSX
//   </h1>
// );
 
//  //React functional Component
//  const HeadingComponent = ()=>(
//   <div id="container"> 
//     {title}
//      <h1 className="heading" tabIndex="1">Hello from Functional Component</h1>
//   </div>
//  )
 
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);



// const GreetingComponent = ()=>{
//   const hrs = new Date().getHours();
//   let greeting = "";
//   if(hrs>=1 && hrs<12) greeting = "Good Morning";
//   else if(hrs>=12 && hrs<19) greeting = "Good Afternoon";
//   else greeting = "Good Night";
//    return (
//       <div>
//         <h1>Greeting Component</h1>
//         <h2 style={{color:'green'}}>{greeting}</h2>
//       </div>
//     )
//  }
// root.render(<GreetingComponent/>);



// const HeaderComponent = ()=>{
//   return (
//     <div className="header">
//       <h1>Header Component</h1>
//     </div>
//   )
//  }

//  const Card = ({name})=>(<h2>User: {name}</h2>)
//  const BodyComponent = ()=>{
//   return (
//     <div className="body">
//       <h1>Body Component</h1>
//       <Card name="Shubham" />
//       <Card name="Riya" />
//   </div>
//   )
//  }
//   const FooterComponent = ()=>{
//   return (
//     <div className="footer">
//       <h1>Footer Component</h1>
//     </div>
//   )
//  }  

//  const App = ()=>(
//   <>
//     <HeaderComponent/>
//     <BodyComponent/>
//     <FooterComponent/>
//   </>
// )
 
// root.render(<App/>);






//User Card Component
//  const UserCard = ({name, age, location})=>{
//   return (
//     <div className="user-card">
//       <h2>Name: {name}</h2>
//       <h3>Age: {age}</h3>
//       <h4>Location: {location}</h4>
//     </div>
//   )
//  }
// const user = { name: "Karan", age: 22, location: "Pune" };
// root.render( <div>
//     <UserCard name={user.name} age={user.age} location={user.location} />
//     <UserCard name="Riya" age="25" location="Mumbai" />
//     <UserCard name="Amit" age="28" location="Bangalore" />
//   </div>);



// React Element
// const heading = React.createElement("h1", {id:"heading"}, "Hello world");

//React Element -JSX
// const heading  = (<h1 className="heading" tabIndex="1">
//   Hello from JSX
//   </h1>);
// root.render(heading);







/* <div id ="parent">
  <div id="child">
    <h1>Shubham</h1>
    <h1>AKSHAY</h1>
  </div>
  <div id="child2">
    <h1>Shubham2</h1>
    <h1>AKSHAY2</h1>
  </div>
</div> */


// const parent = React.createElement("div", {id:"parent"},
//     [React.createElement("div", {id:"child"},[
//         React.createElement("h1", {},"Shubham"),
//         React.createElement("h1", {},"AKSHAY")
//     ]),  
//      React.createElement("div", {id:"child2"},[
//         React.createElement("h1", {},"Shubham2"),
//         React.createElement("h1", {},"AKSHAY2")
//     ])]
// )

// const heading = React.createElement("h1", {id:"heading", xyz:"abc"}, "Hello World from React!");
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById('root'));
 
// root.render(parent);