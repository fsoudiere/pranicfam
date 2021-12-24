import { useAppContext } from './UserContext.js';

function AuthApp() {
  const { user } = useAppContext();

  return (
    <>
      <h1>Hello, {user.name}!</h1>
    </>
  );
}

export default AuthApp;