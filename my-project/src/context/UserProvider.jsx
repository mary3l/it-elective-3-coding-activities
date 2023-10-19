import { createContext } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const user = {
    name: "Hatdog",
    age: 21,
  };
  return (
    <UserContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
