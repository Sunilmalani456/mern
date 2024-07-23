/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";

export const UserProviderContext = createContext();

export function UserProvider({ children }) {
  const userToken = Cookies.get("accessToken");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);
  // const [role, setRole] =
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/crnt-usr`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        });

        const result = await res.json();

        if (result.success === true) {
          setUser(result.data);
          setRole(result.data.role);
        }

        setLoading(false);

        console.log("current user", result);
      } catch (error) {
        console.log(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    currentUser();
  }, [userToken]);

  return (
    <UserProviderContext.Provider
      value={{ user, setUser, userToken, loading, role, setRole }}
    >
      {children}
    </UserProviderContext.Provider>
  );
}
