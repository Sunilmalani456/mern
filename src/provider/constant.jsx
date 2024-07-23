import { useContext } from "react";
import { UserProviderContext } from "./userProvider";

export const useData = () => {
  const context = useContext(UserProviderContext);

  if (context === undefined)
    throw new Error("useData must be used within a UserContextProvider");

  return context;
};
