import React, { Component } from 'react';
import './App.css';
import Menu from './Menu';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

class App extends Component {

  render(){
  return (
    <Router>
    
    <div className="App">
      <Menu />
      <Switch>
        <Route path='/home' component={Home} exact/>
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </div>
    
    </Router>
   
  );

   
     
}
}
export default App;
