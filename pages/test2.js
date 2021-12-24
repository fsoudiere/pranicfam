import { useState } from 'react';
import { useAppContext } from '../context/UserContext.js'

function AuthApp() {
    const { user } = useAppContext();
    return (
      <>
        <h1>Hello, {user.name}!</h1>
      </>
    );
  }

function UnauthApp() {
    const { login } = useAppContext();
    const [name, setName] = useState();
  
    return (
      <>
        <h1>What's Your name</h1>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <button onClick={() => login(name)}>Next</button>
      </>
    );
  }

export default function Home() {
    const { user } = useAppContext();
    if (user.auth === true) {
        return <h1>Hello, {user.name}!</h1>
    }
    else {
        return UnauthApp();
    }
}