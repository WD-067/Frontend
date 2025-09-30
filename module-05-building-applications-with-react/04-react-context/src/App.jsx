import { Route, Routes } from "react-router";

import { AuthContextProvider } from "./context/AuthContext";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";

const App = () => {
  return (
    <LanguageProvider>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </LanguageProvider>
  );
};

export default App;
