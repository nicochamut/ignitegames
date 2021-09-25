import React from "react";
//Components and pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
//Styles
import GlobalStyles from "./components/GlobalStyles";
//Route
import { Route } from "react-router";

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={["/game/:id", "/"]}>
        <Nav />
        <Home />
      </Route>
    </div>
  );
};

export default App;
