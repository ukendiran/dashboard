// apiService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:4000'; // Update with your API's base URL

const apiService = axios.create({
    baseURL: BASE_URL,
    timeout: 5000, // Adjust the timeout as needed
});

const service = {
    fetchUsers: async () => {
        try {
            const response = await apiService.get('/api/users'); // Example endpoint
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    createUser: async (userData) => {
        try {
            const response = await apiService.post('/api/users', userData); // Example endpoint
            return response.data;
        } catch (error) {
            throw error;
        }
    },


    fetchData: async () => {
        try {
            const response = await apiService.get('/api/dashboard');
            return response.data;
        } catch (error) {
            throw error;
        }
    },


};

export default service;
