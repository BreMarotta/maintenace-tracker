import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Button, ButtonLabel } from './Styles/Container.styles'
import { useSelector } from "react-redux";
import Navigation from "./features/settings/Navigation";
import Home from "./features/settings/Home";
import Signup from "./features/settings/Signup";

function App() {
  // const design = useSelector(state => state.design.entities)
  const [count, setCount] = useState(0);

  // console.log(design.entities)
  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  return (
    <BrowserRouter>
      {/* <Button design={design}><ButtonLabel>TEst</ButtonLabel></Button> */}
        {/* <GlobalStyles design={design}/> */}
        <Navigation />
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route exact path="/home" >
            <Home />
            {/* <h1>Page Count: {count}</h1> */}
          </Route>
          <Route exact path="/signup" >
            <Signup />
          </Route>
        </Switch>

    </BrowserRouter>
  );
}

export default App;
