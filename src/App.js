import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

// pages
import MainPage from "./pages";
import About from "./pages/About";
import NotFoundPage from "./pages/404";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/404" component={NotFoundPage} />
          <Route exact path="/about" component={About} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
