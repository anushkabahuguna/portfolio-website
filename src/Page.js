import React, { useEffect } from "react";
// import { Switch, BrowserRouter, Route } from "react-router-dom";
import { Switch, Route as ProjectRoute } from "react-router-dom";
import { Navigation, Route, fade, scale } from "react-tiger-transition";
import "react-tiger-transition/styles/main.min.css";
import Navbar from "./Navbar";
import ProjectList from "./ProjectList";
import ProjectItem from "./ProjectItem";
import Contact from "./Contact";
import Loading from "./Loading";
import About from "./About";
import Home from "./Home";
import useToggleState from "./hooks/useToggleState";
import { projects, services } from "./data/info";

const style = {
  height: "100%",
  width: "100%",
};

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

function checkId(id) {
  var project = projects.find((project) => project.id === id);
  if (project) return <ProjectItem {...project} />;
  else return <Home />;
}
function Page() {
  const [loading, setLoading] = useToggleState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading();
    }, 4500);
  }, []);
  return (
    <>
      {!loading ? (
        <div style={style}>
          <Switch>
            <Navigation>
              <Navbar />
              <Route exact path={`${process.env.PUBLIC_URL}/projects`}>
                <ProjectList projects={projects} />
              </Route>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/about`}
                key="/about"
              >
                <About services={services} />
              </Route>
              <ProjectRoute
                exact
                path={`${process.env.PUBLIC_URL}/projects/:id`}
                render={(routeProps) => checkId(routeProps.match.params.id)}
              ></ProjectRoute>
              <Route exact path={`${process.env.PUBLIC_URL}/contact`}>
                <Contact />
              </Route>
              <Route exact path={`${process.env.PUBLIC_URL}/`}>
                <Home />
              </Route>
            </Navigation>
          </Switch>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Page;
