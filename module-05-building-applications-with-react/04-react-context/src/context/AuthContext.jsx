import { createContext, useState } from "react";

const AuthContext = createContext();
// createContext() creates special "Context Object"
// "Context Object" has 2 main parts we care about:
// 1. a Provider (ReactComponent)
// 2. a Consumer (ReactComponent)
// (3. a hidden internal symbol React uses as the "channel id")

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // console.log("user: ", user);

  const signOut = () => {
    setUser(null);
  };

  return (
    // <AuthContext.Provider value={"Hello from Auth Context"}>
    //   {children}
    // </AuthContext.Provider>

    // React 19 shortcand, doesn't need .Provider, when providing value={}
    <AuthContext value={{ user, setUser, signOut }}>{children}</AuthContext>
  );
};

export { AuthContext, AuthContextProvider };
