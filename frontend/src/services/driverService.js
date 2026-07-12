import axios from "axios";


const API = "http://localhost:5000/api/drivers";



const authConfig = {

    headers:{

        Authorization:

        `Bearer ${localStorage.getItem("token")}`

    }

};



export const getDrivers = () => {

    return axios.get(
        API,
        authConfig
    );

};



export const addDriver = (data) => {

    return axios.post(
        API,
        data,
        authConfig
    );

};