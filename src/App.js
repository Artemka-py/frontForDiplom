import React from 'react';
import Master from './layouts/master';
import { Switch, Route } from "react-router-dom";
import AboutPage from "./pages/about/AboutPage";

const App = () => {
  return (
    <Master>
      <Switch>
        <Route path="/about" component={AboutPage} />
        {/*<Route path="/admin" component={Master} />*/}
        {/*<Route path="/" component={Master} />*/}
      </Switch>
    </Master>
      )
}

export default App;