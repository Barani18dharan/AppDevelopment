import React, { useState } from "react";
import { ContactService } from '../Services/ContactService';
import axios from 'axios';
import Saved from './Saved';
import './Meeting.css';


function FileManager() {
  const [meetingData, setMeetingData] = useState({
    title: "",
    startTime: "",
    endTime: "",
    organizer: "",
    location: ""
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMeetingData({ ...meetingData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    ContactService.createMeeting(meetingData)
      .then((res) => {
        setSuccessMessage('Meeting created successfully');
        console.log(res);
        setErrorMessage('');
      })
      .catch((error) => {
        setSuccessMessage('');
        setErrorMessage('Error creating meeting: ' + error.response.data.message);
      });
  };

  const formStyle = {
    width: '400px',
    margin: '0 auto',
  };

  const inputStyle = {
    display: 'block',
    margin: '10px 0',
    padding: '8px',
    width: '100%',
  };

  return (
    <div className="meeting-container">
      <div>
        <h1 className="sch-mt">SCHEDULE MEETING</h1>
        <div className='meeting'>
          <h2 className="ent-det">Enter Meeting Details</h2>
          <form onSubmit={handleSubmit} style={formStyle}>
            <div>
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={meetingData.title}
                onChange={handleInputChange}
                required
                style={inputStyle}
              />
            </div>
            <div>
              <label>Start Time:</label>
              <input
                type="datetime-local"
                name="startTime"
                value={meetingData.startTime}
                onChange={handleInputChange}
                required
                style={inputStyle}
              />
            </div>
            <div>
              <label>End Time:</label>
              <input
                type="datetime-local"
                name="endTime"
                value={meetingData.endTime}
                onChange={handleInputChange}
                required
                style={inputStyle}
              />
            </div>
            <div>
              <label>Organizer:</label>
              <input
                type="text"
                name="organizer"
                value={meetingData.organizer}
                onChange={handleInputChange}
                required
                style={inputStyle}
              />
            </div>
            <div>
              <label>Location:</label>
              <input
                type="text"
                name="location"
                value={meetingData.location}
                onChange={handleInputChange}
                required
                style={inputStyle}
              />
            </div>
            <button type="submit" style={inputStyle}>Submit</button>
          </form>
          {successMessage && <p>{successMessage}</p>}
          {errorMessage && <p>{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default FileManager;
