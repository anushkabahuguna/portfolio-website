import React from "react";
import Navbar from "./Navbar";
import ProjectList from "./ProjectList";
import ProjectItem from "./ProjectItem";
import Contact from "./Contact";
import { projects, services } from "./data/info";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./About";

const style = {
  height: "100%",
  width: "100%",
};
function findProject(id) {
  return projects.find((project) => project.id === id);
}
function Page(props) {
  return (
    <div style={style}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/projects"
            render={() => <ProjectList projects={projects} />}
          ></Route>
          <Route
            exact
            path="/about"
            render={() => <About services={services} />}
          ></Route>
          <Route
            exact
            path="/projects/:id"
            render={(routeProps) => (
              <ProjectItem {...findProject(routeProps.match.params.id)} />
            )}
          ></Route>
          <Route exact path="/contact" render={() => <Contact />}></Route>
          <Route
            exact
            path="/"
            render={() => <h1>Hello this is the home page</h1>}
          ></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Page;
