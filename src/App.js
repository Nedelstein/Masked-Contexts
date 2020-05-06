import React from "react";
import "./App.scss";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import ScrollToTop from "./components/ScrollToTop";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

// pages
import MainPage from "./pages";
import About from "./pages/About";
import NotFoundPage from "./pages/404";
import Masks from "./pages/Masks";

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/404" component={NotFoundPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/masks" component={Masks} />
          <Redirect to="/404" />
        </Switch>
      </Router>
      <meta
        property="og:title"
        content="An exploration into the COCO dataset and a dialogue with the photographers whose images were scraped by the dataset's authors without their knowledge or consent."
      />
    </ThemeProvider>
  );
}

export default App;
