import React from "react";
import Navbar from "./Navbar";
import ProjectList from "./ProjectList";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const style = {
  height: "100%",
  width: "100%",
};
function Page(props) {
  return (
    <div style={style}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/projects"
            render={(routeProps) => <ProjectList />}
          ></Route>
          <Route
            exact
            path="/projects/:id"
            render={(routeProps) => <h1>{routeProps.match.params.id}</h1>}
          ></Route>
          <Route
            exact
            path="/"
            render={(routeProps) => <h1>Hello this is the home page</h1>}
          ></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Page;
