import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductPage from "./pages/ProductOverview/ProductOverviewContainer";
import Header from "./pages/ProductOverview/components/HeaderComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductPage} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
