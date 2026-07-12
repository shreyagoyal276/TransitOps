import api from "./api";

export const getFuel = async (token) => {
  return await api.get("/fuel", {
    headers: {
      Authorization: token,
    },
  });
};