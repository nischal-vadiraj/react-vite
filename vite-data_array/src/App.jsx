import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//using map method from js

const USERS = [
  {
    name: "Sid Anderson",
    email: "sid@example.com",
    profileUrl: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Ava Park",
    email: "ava@example.com",
    profileUrl: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Liam Park",
    email: "liam@email.com",
    profileUrl: "https://i.pravatar.cc/150?img=14",
  },
  {
    name: "Max Wilson",
    email: "max@email.com",
    profileUrl: "https://i.pravatar.cc/150?img=17",
  },
];

const App = () => (
  <div style={{ display: "flex" }}>
    {USERS.map(user => (
      <User {...user} />
    ))}
  </div>
);

const User = ({ name, email, profileUrl }) => (
  <div
    style={{
      border: "1px solid black",
      width: 150,
      margin: 5,
      overflowWrap: "anywhere",
    }}
  >
    <img alt={name} src={profileUrl} />
    <div style={{ padding: 5 }}>
      <strong>{name}</strong>
      <p>{email}</p>
    </div>
  </div>
);


export default App
