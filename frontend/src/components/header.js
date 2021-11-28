import React, { Component } from 'react';

// const getTheDate = () => {
//     const newDate = new Date();
//         return newDate.getDate() + " " + newDate.getMonth() + " " + newDate.getFullYear();
// }

const Header = (props) => {
        return(  
            <header>         
                <div>
                <h1>Hello</h1>                   
                    <input
                        onChange={props.keywords}
                    />               
                </div>
            </header> 

        )
    }


export default Header;