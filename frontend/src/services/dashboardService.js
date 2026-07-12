import api from "./api";

export const getDashboard = async (token) => {
  return await api.get("/dashboard", {
    headers: {
      Authorization: token,
    },
  });
};