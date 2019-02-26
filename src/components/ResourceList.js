import React from "react";
import useResources from "./useResources";

//there is no this. inside of a function

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);
  return (
    <ul>
      {resources.map(record => (
        <li key={record.Id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
