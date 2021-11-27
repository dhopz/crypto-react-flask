import React, { Component } from 'react';

const getTheDate = () => {
    const newDate = new Date();
        return newDate.getDate() + " " + newDate.getMonth() + " " + newDate.getFullYear();
}

class Header extends Component { 

    render(){
        return(
            <div>
                {getTheDate()}
            </div>
        )
    }
    
}

export default Header;