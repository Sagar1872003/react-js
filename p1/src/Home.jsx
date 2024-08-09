import { Component } from "react";

class Home extends Component{

    constructor(){
        super()
        this.state = {
            name : "sagar"
        };
    }

    changeName(){
        this.setState({name : "aaasagar"});
    }

    render(){
        return(
          <div>
            <h1>Hello {this.state.name}</h1>
            <button onClick = {() => {this.changeName()}}>click</button>
          </div> 
        )   
    }
}

export default Home;