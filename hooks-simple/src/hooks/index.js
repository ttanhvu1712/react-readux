import React, { useState, useEffect } from "react";
import axios from "axios";

export const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async (resource) => {
      const resp = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );
      setResources(resp.data);
    })(resource);
  }, [resource]);

  return resources
}