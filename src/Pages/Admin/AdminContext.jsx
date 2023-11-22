import { createContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (cookies.token) {
      const authUser = async () => {
        try {
          const response = await axios.get(
            import.meta.env.VITE_SERVER_URL + `/admin/auth`,
            {
              headers: {
                Authorization: cookies.token,
              }
            }
          );
          const data = await response.data;

          if (!data.success) {
            removeCookie("token");
            throw new Error(`${data.message} : ${data.error}`);
          }
          setIsAuthenticated(true);
        } catch (error) {
          setIsAuthenticated(false);
          }
      };

      authUser();
    }
  }, [cookies]);

  const login = async (password) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_SERVER_URL + `/admin/login`,
        {password:password}
      );
        console.log(response);
      const data = response.data;

      if (!data.success) {
        throw new Error(`${data.message} : ${data.error}`);
      }
      setIsAuthenticated(true);
      setCookie("token", data.token, { path: "/", maxAge: 10800 });
      return {
        success: true,
        message: data.message,
      };
    } catch (error) {
      return {
        success: false,
        message: error.response.data.error,
      };
    }
  };

  const logout = async () => {
    try {
      setIsAuthenticated(false);
      removeCookie("token");

      return {
        success: true,
        message: data.message,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  };

  const value = {
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

const AuthContextObj = {
  AuthProvider,
  AuthContext
};

export default AuthContextObj;