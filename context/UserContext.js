import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
    // User is the name of the "data" that gets stored in context
  const [user, setUser] = useState();
  const [selectedMember, setSelectedMember] = useState();
  const [queryMember, setQueryMember] = useState();
  // Login updates the user data with a name parameter

  console.log(selectedMember, user, queryMember);




  return (
    <AppContext.Provider value={{ user, setUser, selectedMember, setSelectedMember, queryMember, setQueryMember }}>
      {children}
    </AppContext.Provider>
  );
}



export function useAppContext() {
  return useContext(AppContext);
}