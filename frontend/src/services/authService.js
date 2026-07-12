import api from "./api";

export const login = async (email, password, role) => {
  return await api.post("/login", {
    email,
    password,
    role,
  });
};

export const logout = async () => {
  return await api.post("/logout");
};

export const getCurrentUser = async () => {
  return await api.get("/dashboard");
};