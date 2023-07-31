import React from 'react';
import { Route, Switch } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./App.css";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import Create from './views/Create/Create';
import Nav from './components/Nav/Nav';


function App() {
  const location = useLocation();
  return (  
    <div>
      <div>
      {location.pathname !== "/" ? <Nav/> : "" }
      </div> 

      <div className="App">
        <Switch> 
          <Route exact path = '/' component={Landing} />
          <Route exact path = '/Home' component={Home} />
          <Route exact path = '/Create' component={Create} />
        </Switch>
      </div>    
    </div> 
  );
}

export default App;
