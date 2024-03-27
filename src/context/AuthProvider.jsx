import { createContext } from "react";
import PropTypes from "prop-types";
import useFetchData from "../hooks/useFetchData";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { data, error, loading } = useFetchData("/users/user-data");

  const userData = {
    data,
    error,
    loading,
  };

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object,
};

export default AuthProvider;
