import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load logged-in user from localStorage on refresh
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const register = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.length >= 5) {
      alert("Only 5 people can register");
      return false;
    }

    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful");
    return true;
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem("loggedUser", JSON.stringify(foundUser));
      return true;
    }

    alert("Invalid email or password");
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("loggedUser");
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
