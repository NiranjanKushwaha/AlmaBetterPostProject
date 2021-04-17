import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import PostPage from "./components/PostPage";
import User from "./components/User";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/post/:id" component={PostPage} />
        <Route path="/user/:uid" component={User} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
