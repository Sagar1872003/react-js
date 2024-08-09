import { Component } from "react";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            no: 0,
        }

    }
    plus() {
        this.setState({
            no: this.state.no + 1
        })
    }
    minus() {
        this.setState({
            no: this.state.no - 1
        })
    }
    reset(){
        this.setState({
            no: 0
        })
    }

    render(){
        return(
            <div>
                <h1>no :- {this.state.no}</h1>
                <button onClick={() => {this.plus()}}>+</button>
              {
                this.state.no == 0 
                  ?<button disabled onClick={() => {this.minus()}}>-</button>
                  :<button onClick={() => {this.minus()}}>-</button>
              }

              { 
              this.state.no == 0
                ?<button disabled onClick={() => this.reset()}>reset</button>
                :<button onClick={() => this.reset()}>reset</button>
              }
            </div>
        )
    }
}

export default Home;