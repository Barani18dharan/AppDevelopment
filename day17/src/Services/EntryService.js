

import axios from "axios";


const createNewUser = async (request) => {

    const response = await axios.post(`http://localhost:8080/api/entry/post`, request);
    return response.data;
};

const validateUser = async (request) => {
    const response = await axios.post(`http://localhost:8080/api/entry/auth_user`, request);
    return response.data;
};

export const EntryService = {
    createNewUser,
    validateUser
}
