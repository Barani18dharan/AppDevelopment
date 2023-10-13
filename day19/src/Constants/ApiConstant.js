
let jwtToken = localStorage.getItem('Token');
let authHeader = `Bearer ${jwtToken}`;

export const headers = {
    'Authorization': authHeader,
    'Content-Type': 'application/json',
}

// export const BASE_URL = 'http://localhost:8083/api/v1';