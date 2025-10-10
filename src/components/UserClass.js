import React from 'react';

class UserClass extends React.Component {

    constructor(props){
        super(props);
        // console.log("props:", props);
        // console.log(this.props.name +" constrcutor");
        this.state = {
            // count : 0
            userInfo:{
                name : "Dummy",
                location : "Default",
                login : "Dummy",
                // avatar_url: "https://dummy-photo"
            }
        }
    }
    async componentDidMount(){
        // console.log(this.props.name+" componentDidMount");
        // Api call
        const data = await fetch("https://api.github.com/users/shubham11408139");
        const json = await data.json();
        console.log(json);
        this.setState({userInfo:json})
        
    }

    componentDidUpdate(){
        console.log("componentDidUpdate called")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount called")
    }
    render(){
        console.log(this.props.name+" Render")
        // const {name, location, contact} = this.props;
        // const {count} = this.state;
        const {name, location, login,avatar_url} = this.state.userInfo
        return (
            <div className="user-about-card">
                <img src={avatar_url} alt="avatar"></img>
                <h2>Name:{name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: {login}</h4>
                {/* <h4>Count:{count}</h4> */}
                {/* <button onClick={()=>{this.setState({count:this.state.count+1})}}>Count Increase</button> */}
            </div>
        );
    }
}
export default UserClass;
/******(How Lifecycle works)
 * MOUNTING ------------------------------------
 * constructor called
 * Render(with dummy data)
 *      <HTML Dummy>
 * componentDidMount
 *      <API CALL>
 *      <this.setState>  --> State variable is updated
 * 
 * ------Update cycle------------------
 * Render(Api data)
 *      <HTML with loaded with API data>
 * componentDidUpdate
 * componentWillUnmount  (When component destroys, its called)
 */