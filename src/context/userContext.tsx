import React from "react";

type User = {
  name: String;
  email: String;
};

type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export const UserContext = React.createContext<UserContextType | null>(null);

export function useUser() {
  return React.useContext(UserContext);
}

export default function UserContextProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  const [user, setUser] = React.useState<User | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
