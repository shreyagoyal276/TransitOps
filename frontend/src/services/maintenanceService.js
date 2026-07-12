import api from "./api";

export const getMaintenance = async (token) => {
  return await api.get("/maintenance", {
    headers: {
      Authorization: token,
    },
  });
};