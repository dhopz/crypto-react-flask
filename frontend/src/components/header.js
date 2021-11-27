import React, { Component } from 'react';

const getTheDate = () => {
    const newDate = new Date();
        return newDate.getDate() + " " + newDate.getMonth() + " " + newDate.getFullYear();
}

class Header extends Component { 

    inputChangeHandler(event, name){
        console.log(event.target.value)
        console.log(name)
    }

    render(){
        return(
            <header
                onClick={ () => console.log("I was clicked")}
            >
            <div>
                {getTheDate()}
                <input
                    onChange={(e) => this.inputChangeHandler(e, 'this is something') }
                />
            </div>

            </header>
        )
    }
    
}

export default Header;