import logo from './logo.svg';
import './App.css';
import Component1 from './Component1';
import Component2 from './Component2';
import Home from './Home';
import About from './About.js';
import {BrowserRouter, Route, Link} from "react-router-dom"

function App(){
  return(
    <>
    <BrowserRouter>
    <Link to="">Home</Link>&nbsp;
    <Link to="/about">About</Link>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    </BrowserRouter>
    
    <h1>Let's Learn React</h1>
    <Component1/>
    <Component2 friend="Rishabh"/>
    <Component2 friend="Sharma"/>
    </>
  );
}

export default App;