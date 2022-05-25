import React from 'react';

export default class Component3 extends React.Component{
    componentWillUnmount(){
        alert("DATA DELETED")
    }
    render(){
        return(
            <>
                <ul>
                    <li>Name: Rishabh</li>
                    <li>Email: rishabh@gmail.com</li>
                </ul>
            </>
        )
    }

}