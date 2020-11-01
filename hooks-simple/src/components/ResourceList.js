import React from "react";
import { useResources } from '../hooks'

export default function ResourceList({ resource }) {
  const resources = useResources(resource)

  return (
    <ul>
      {resources.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
}
