import React from "react";

function ProjectItem({
  id,
  name,
  description,
  webLink,
  gitHubLink,
  startDate,
  endDate,
  images,
  tags,
}) {
  const { introduction, ending } = description;
  return (
    <div>
      {images.map((image) => (
        <img alt={id} src={image} style={{ width: "200px" }} />
      ))}
      <h2>{name}</h2>
      <div>{introduction}</div>
      <div>{ending}</div>
    </div>
  );
}

export default ProjectItem;
