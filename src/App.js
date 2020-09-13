import React from "react";
import { Route } from "react-router-dom";
import "./App.scss";
import { Homepage } from "./pages/homepage/homepage.component";

export const Hatspage = () => {
  return (
    <div>
      <h1>hatspage</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route path="/hats" component={Hatspage} />
    </div>
  );
}

export default App;
