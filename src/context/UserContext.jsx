import { createContext, useContext, useState } from "react";

// create a context
const UserContext = createContext();

// export a reusable context
export const useUserContext = () => useContext(UserContext);

// export the main wrapper of context
export default function UserContextProvider({ children }) {
  const [username, setUsername] = useState("Bob");
  const [userAge, setUserAge] = useState(18);
    
  return (
    <UserContext.Provider
      value={{ username, setUsername, userAge, setUserAge }}
    >
      {children}
    </UserContext.Provider>
  );
}
