import React, { useContext } from "react";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { AuthContext, AuthProvider } from "./contexts/auth";

const AppRoutes = () => {
  const Private = ({ children }) => {
    const { authenticaded, loading } = useContext(AuthContext);

    if (loading) {
      return <div className="loading">Carregando...</div>;
    }

    if (!authenticaded) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Private>
                <MainPage />
              </Private>
            }
          />
          <Route exact path="/login" element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
