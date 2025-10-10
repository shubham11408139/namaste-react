import React, { lazy ,Suspense} from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header';
import Body from './components/Body';

import { createBrowserRouter,RouterProvider,Outlet } from 'react-router';
// import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
// import Grocery from './components/Grocery';

//we can call it by any name
//Chunking
//Code Splitting
//Lazy Loading
//Dynamic Bundling
// On demand loading
//dynamic import
const Grocery = lazy(()=>import("./components/Grocery"));
const About = lazy(()=>import("./components/About"));

const AppLayout = ()=>{
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<AppLayout />,
    children : [
      {path : "/", element:<Body />},
      {path: "/about", element: (<Suspense fallback={<h1>Loading...</h1>}>
        <About />
        </Suspense>)
      },
      {path: "/contact", element:<Contact />},
      {
        path: "/grocery",
        element: (<Suspense fallback={<h1>Loading...</h1>}>
           <Grocery />
           </Suspense>)
      },
      {path: "/restaurant/:resId", element:<RestaurantMenu />},
    ],
    errorElement: <Error />
  },
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
// root.render(<AppLayout />);

































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