import React from "react";
import Navbar from "./Navbar";
import ProjectList from "./ProjectList";
import ProjectItem from "./ProjectItem";
import Contact from "./Contact";
import { projects, services } from "./data/info";
import { Switch, BrowserRouter, Route as ProjectRoute } from "react-router-dom";
import { Navigation, Route, glide, fade, scale } from "react-tiger-transition";
import "react-tiger-transition/styles/main.min.css";

import About from "./About";
import Home from "./Home";
const style = {
  height: "100%",
  width: "100%",
};
glide({
  name: "glide-f",
  direction: "left",
  enter: {
    duration: 600,
    easing: "ease",
    opacity: 0.3,
    zIndex: 1,
    delay: 0,
    scale: 0.6,
  },
  exit: {
    duration: 600,
    easing: "ease",
    opacity: 1,
    zIndex: 2,
    delay: 0,
  },
});
fade({
  name: "default-fade",
});
scale(
  // scale

  {
    name: "scaleUp",
    enter: {
      duration: 300,
      easing: "ease",
      zIndex: 2,
      delay: 300,
      opacity: 0,
      scale: 0.8,
    },
    exit: {
      duration: 300,
      easing: "ease",
      opacity: 0,
      zIndex: 1,
      delay: 0,
      scale: 0.8,
    },
  }
);
function findProject(id) {
  return projects.find((project) => project.id === id);
}
function Page() {
  return (
    <div style={style}>
      <Switch>
        <Navigation>
          <Navbar />
          <Route exact path="/projects">
            <ProjectList projects={projects} />
          </Route>
          <Route exact path="/about">
            <About services={services} />
          </Route>
          <ProjectRoute
            exact
            path="/projects/:id"
            render={(routeProps) => (
              <ProjectItem {...findProject(routeProps.match.params.id)} />
            )}
          ></ProjectRoute>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Navigation>
      </Switch>
    </div>
  );
}

export default Page;
