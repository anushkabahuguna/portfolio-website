import React from "react";
import Navbar from "./Navbar";
import ProjectList from "./ProjectList";
import ProjectItem from "./ProjectItem";
import Contact from "./Contact";
import { projects, services } from "./data/info";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import About from "./About";
import Home from "./Home";
const style = {
  height: "100%",
  width: "100%",
};

function findProject(id) {
  return projects.find((project) => project.id === id);
}
function Page() {
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
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Page;
