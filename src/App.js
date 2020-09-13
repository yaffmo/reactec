import React from "react";
import { Route } from "react-router-dom";
import "./App.scss";
import { Homepage } from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
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
      <Route path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
