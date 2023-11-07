import axios from "axios";

const API_URL = "https://file-sharing-app-server-mplp.onrender.com";

export const uploadFile = async (data) => {
    try {
        let res = await axios.post(`${API_URL}/upload`, data);
        return res.data;
    } catch (error) {
        console.log(error);
        console.error("Error uploading file API", error.message);
    }
};
