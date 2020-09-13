import React from "react";
import { Route } from "react-router-dom";
import "./App.scss";
import { HomePage } from "./pages/HomePage/HomePage.component";
import ShopPage from "./pages/ShopPage/ShopPage.component";
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
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
