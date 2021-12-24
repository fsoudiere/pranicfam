import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext({ name: '', auth: false });

export function AppWrapper({ children }) {
    // User is the name of the "data" that gets stored in context
  const [user, setUser] = useState({ name: '', auth: false });

  // Login updates the user data with a name parameter
  const login = (name) => {
    setUser((user) => ({
      name: name,
      auth: true,
    }));
  };

   // Logout updates the user data to default
   const logout = () => {
    setUser((user) => ({
      name: '',
      auth: false,
    }));
  };


  return (
    <AppContext.Provider value={{ user, login, logout }}>
      {children}
    </AppContext.Provider>
  );
}



export function useAppContext() {
  return useContext(AppContext);
}