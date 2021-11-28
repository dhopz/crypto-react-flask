import React, { Component } from 'react';

const getTheDate = () => {
    const newDate = new Date();
        return newDate.getDate() + " " + newDate.getMonth() + " " + newDate.getFullYear();
}

class Header extends Component { 

    state = {
        active: false,
        keywords:'',
        count: 0
    }

    inputChangeHandler = (event) => {
        const value = event.target.value === ' ' ? false : true;

        this.setState({
            active:value,
            keywords: event.target.value
        })
    }

    addOne(){
        this.setState({count: this.state.count + 1})
    }

    render(){

        return(  
            <header style={{background: `${this.state.active ? '#5b889e' : '#03a9fa'}`}}>         
                <div>
                <h1>Hello</h1>
                    {getTheDate()}
                    <input
                        onChange={this.inputChangeHandler}
                    />
                    <div>{this.state.keywords}</div>
                <br/>
                <div>{this.state.count}</div>
                <button onClick ={ () => this.addOne()}>Add One</button>
                </div>
            </header> 

        )
    }
    
}

export default Header;