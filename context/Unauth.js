import { useState } from 'react';
import { useAppContext } from './UserContext.js';

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

export default UnauthApp;