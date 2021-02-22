import React from "react";
import {BrowserRouter, BrowserRouter as Router, Route} from "react-router-dom";
import Directory from "./pages/Directory";

function App() {
  return (
    <div className="App">  
      <BrowserRouter>
        <Route path="/" exact>
          <Directory />
        </Route>
      </BrowserRouter>    
    </div>
  );
}

export default App;
