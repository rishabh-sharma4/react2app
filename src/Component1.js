import React from "react";
import Component3 from "./Component3";

export default class Component1 extends React.Component{

    constructor(){
        super();
        this.state={
            welcome:true
        }
        console.warn("Constructor")
    }
    
    componentDidMount(){
        console.warn("ComponentDidMount")
    }
        testFunc(){
        alert("This is button");
    }
    
    render(){
        return(
            <div>
                {console.warn("Render")}
                {this.state.welcome?
                <Component3/>: null
                 }
                <h1>This is a class component1.</h1>
                <button onClick={this.testFunc.bind(this)}>Click me</button>
                <button onClick={()=>{this.testFunc()}}>Click me</button>
                <button onClick={()=>{this.setState({welcome:!this.state.welcome})}}>Delete Data</button>
            </div>
        )
    }
}