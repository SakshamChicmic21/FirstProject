import { createContext, useContext, useEffect, useState } from "react";
import { apiConnector } from "../services/api";
import Loading from "../components/Loading";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [token, setToken] = useState(() => {
    return localStorage.getItem("Token") || null;
  });
  const [loading, setLoading] = useState(false);

  const login = (email, role = "USER") => {
    setUser({ email, role });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("Token");
  };

  const [sweets, setSweets] = useState([]);
  useEffect(() => {
    const fetchSweets = async () => {
      console.log("Fetching sweets...");
      setLoading(true);
      try {
        const res = await apiConnector("GET", "/sweets");
        console.log(res);
        if (!res.data.success) throw new Error("Failed to fetch sweets");
        setSweets(res.data.data);
      } catch (error) {
        console.error("Error fetching sweets:", error);
      } finally {
        setLoading(false);
      } 
    };
    fetchSweets();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        sweets,
        user,
        loading,
        setLoading,
        setToken,
        setSweets,
        login,
        logout,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
