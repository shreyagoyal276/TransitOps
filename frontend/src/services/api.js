import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost/transitops/api"
});

export default api;



// later
// import api from "./api";

// export const getVehicles = () =>
//     api.get("/vehicles.php");