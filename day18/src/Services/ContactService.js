
// import { HEADERS } from "../Constants/ApiConstant";
import axios from "axios";
import { headers } from "../Constants/ApiConstant";


const baseUrl = 'http://localhost:8080'; // Replace with your Spring Boot server's base URL


// Define headers


// Create a new meeting
function createMeeting(meeting) {
  return axios.post(`${baseUrl}/api/meetings/create`, meeting, { headers });
}

// Get all meetings
// async function getAllMeetings() {
//   return await axios.get(`${baseUrl}/api/meetings/get`, { headers });
// }
async function getAllMeetings() {
    
      return await axios.get(`${baseUrl}/api/meetings/get`, { headers });
  
       }
  
// Get a specific meeting by ID
function getMeetingById(id) {
  return axios.get(`${baseUrl}/api/meetings/${id}`, { headers });
}

// Update an existing meeting
function updateMeeting(id, updatedMeeting) {
  return axios.put(`${baseUrl}/api/meetings/${id}`, updatedMeeting, { headers });
}

// Delete a meeting by ID
function deleteMeeting(id, data) {
  return axios.delete(`${baseUrl}/api/meetings/${id}`, data, { headers });
}

export const ContactService = {
  createMeeting,
  getAllMeetings,
  getMeetingById,
  updateMeeting,
  deleteMeeting
};
