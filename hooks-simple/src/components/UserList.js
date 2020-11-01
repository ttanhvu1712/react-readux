import React from 'react'
import { useResources } from '../hooks'

export default function UserList() {
  const users = useResources('users')
  return  (
    <ul>
      {users.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}
