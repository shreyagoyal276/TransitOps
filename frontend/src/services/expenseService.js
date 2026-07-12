import api from "./api";

export const getExpenses = async (token) => {
  return await api.get("/expenses", {
    headers: {
      Authorization: token,
    },
  });
};