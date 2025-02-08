import Body from "./Body";
import Chart from "./Chart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "./Navbar";
import Home from "./Home";
import Error_404 from "./Error_404";
import Gender from "./Gender";
import Member from "./Member";
import Download from "./Download";
import Team from "./Team";
import Professor from "./Professor";
import { Processor } from "postcss";


export default function Main() {
  return (
    <Router>
     <Navbar/>
      <Switch>
        {/* Add exact to prevent overlap */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/chart">
          <Chart />
        </Route>
        {/* Handle /home route */}
        <Route path="/home">
          <Home />
        </Route>
        {/* Fallback for undefined routes */}
       
        <Route path="/member">
              <Member/>     
        </Route>

        <Route path="/team">
              <Team/>   
        </Route>

        {/* <Route path="/download">
              <Download/>
        </Route> */}
        <Route path="/professor">
              <Professor />
        </Route>
        <Route>
          <Error_404/>
        </Route>
      </Switch>
    </Router>
  );
}
