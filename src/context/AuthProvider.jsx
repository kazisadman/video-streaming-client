import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import useFetchData from "../hooks/useFetchData";
import instance from "../utils/axiosConfig";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    data: [],
    error: null,
    loading: true,
  });

  const { data, error, loading } = useFetchData("/users/user-data");

  useEffect(() => {
    const fetchData = async () => {
      if (typeof data === "object" && !loading) {
        setUserData({ data: data.data, error, loading });
      } else if (error) {
        const res = await refreshAccessToken();
        if (res) {
          instance.get("/users/user-data").then((res) => {
            setUserData({ data: res.data, error, loading });
          });
        }
      }
    };
    fetchData();
  }, [data, loading, error]);

  const refreshAccessToken = async () => {
    const res = await instance.post("/users/refresh-token");
    return res;
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
