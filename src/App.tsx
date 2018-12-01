import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";
import HomeV2 from "./component/HomeV2/HomeV2";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <CssBaseline/>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/Home" component={HomeV2}/>
        </div>
      </Router>
    );
  }
}

export default App;
