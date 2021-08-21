import React from "react";
import "./App.css";

// My imports
import Search from "./Urls/Search";
import Home from "./Urls/Home";
import { Switch, Route } from "react-router";
import Provider, { TheContext } from "./Data";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Provider>
          <Switch>
            <Route
              exact
              path={"/"}
              render={() => (
                <TheContext.Consumer>
                  {(context) => <Home {...context} />}
                </TheContext.Consumer>
              )}
            />
            <Route exact path={"/search"} component={Search} />
          </Switch>
        </Provider>
      </div>
    );
  }
}

export default BooksApp;
