import React, { Component } from 'react';

const getTheDate = () => {
    const newDate = new Date();
        return newDate.getDate() + " " + newDate.getMonth() + " " + newDate.getFullYear();
}

class Header extends Component { 

    state = {
        name:"David",
        keywords:'',
        count: 0
    }

    inputChangeHandler = (event) => {
        this.setState({
            keywords: event.target.value
        })
    }

    addOne(){
        this.setState({count: this.state.count + 1})
    }

    render(){

        console.log(this.state)

        return(            
            <div>
                {getTheDate()}
                <input
                    onChange={this.inputChangeHandler}
                />
                <div>{this.state.keywords}</div>
            <br/>
            <div>{this.state.count}</div>
            <button onClick ={ () => this.addOne()}>Add One</button>
            </div>

        )
    }
    
}

export default Header;