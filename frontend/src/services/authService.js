import api from "./api";


export const login = async (email, password, role) => {

    return await api.post("/auth/login", {

        email,

        password,

        role

    });

};


export const logout = async () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

};


export const getCurrentUser = async () => {


    const token = localStorage.getItem("token");


    return await api.get("/dashboard", {

        headers: {

            Authorization: `Bearer ${token}`

        }

    });

};