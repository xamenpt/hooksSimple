import { useState, useEffect } from "react";
import axios from "axios";

const useResources = resource => {
  const [resources, setResources] = useState([]);

  const fetchResource = async resource => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );

    setResources(response.data);
  };

  //useEffect Hooks combines didmount and didupdate from class life cycles

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return resources;
};

export default useResources;
