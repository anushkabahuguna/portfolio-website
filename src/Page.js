import React from "react";
import ProjectList from "./ProjectList";
const style = {
  height: "100%",
  width: "100%",
};
function Page(props) {
  return (
    <div style={style}>
      <ProjectList />
    </div>
  );
}

export default Page;
