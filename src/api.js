import axios from "axios";
import urls from "./urls"

const api = {
    properties: {
        async getAllProperties() {
            const response = await axios.get(`${urls.propertiesSearch.getAllProperties}`);
            return response.data;
        },
        async getPropertyById(id) {
            const response = await axios.get(`${urls.propertiesSearch.getAllProperties}/${id}`);
            return response.data;
        },
    },
    brokers: {
        async allBrokers() {
            const response = await axios.get(`${urls.brokersSearch.allBrokers}`);
            return response.data;
        },

    },









}

export default api;