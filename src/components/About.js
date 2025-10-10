import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent constrcutor");
    }

    componentDidMount(){
        console.log("Parent componentDidMount");
    }

   render(){
    console.log("Parent Render")
    return (
        <div>
            <h1>About Us</h1>
            <h2>This is about page</h2>
            <UserClass name={"First"} location={"Agra"} contact={"@shubhamgupta608608"}/>
            {/* <UserClass name={"Second"} location={"Atlanta"} contact={"@elonmusk608608"}/> */}

        </div>
     )   
   }
}
/*
   - Parent constrcutor
   - Parent  Render

      - First constrcutor
        First (class) Render

      - Seond constrcutor
      - Second Render

      <DOM UPDATED - IN SINGLE BATCH>
      - First componentDidMount
      - Second  componentDidMount
   - Parent componentDidMount
   */
  export default About;







// const About =()=>{
//     return (
//         <div>
//             <h1>About Us</h1>
//             <h2>This is about page</h2>
//             {/* <User name={"Shubham (function)"} location={"Agra"} contact={"@shubhamgupta608608"}/> */}
//             <UserClass name={"Shubham (class)"} location={"Agra"} contact={"@shubhamgupta608608"}/>
//         </div>
//     )
// }

// export default About;