import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./features/settings/Navigation";
import Home from "./features/settings/Home";

function App() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route exact path="/" >
            <Home />
            {/* <h1>Page Count: {count}</h1> */}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
