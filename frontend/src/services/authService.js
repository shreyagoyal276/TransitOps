import api from "./api";

export const register = (data) => {

    return api.post("/auth/register", data);

};

export const login = (email, password) => {

    return api.post("/auth/login", {

        email,

        password

    });

};

export const getCurrentUser = () => {

    const token = localStorage.getItem("token");

    return api.get("/dashboard", {

        headers: {

            Authorization: `Bearer ${token}`

        }

    });

};