import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Pages/Home';
import Movie from './Pages/Movie';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <main>
              <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/:id" component={Movie}></Route>
              </Switch>
          </main>
        </BrowserRouter>
      </div>
  );
}

export default App;
