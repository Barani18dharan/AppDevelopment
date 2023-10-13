import React, { useState } from 'react';
import './Meeting.css';
import { ContactService } from '../Services/ContactService';

function Messages() {
  const [meetingId, setMeetingId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [meetingData, setMeetingData] = useState({
    meetingId: '',
    title: '',
    startTime: '',
    endTime: '',
    organizer: '',
    location: '',
  });

  const formStyle = {
    width: '400px',
    margin: '0 auto',
  };

  const labelStyle = {
    display: 'block',
    margin: '10px 0',
  };

  const inputStyle = {
    display: 'block',
    margin: '10px 0',
    padding: '8px',
    width: '100%',
  };

  const buttonStyle = {
    background: '#007bff',
    color: '#fff',
    padding: '8px 16px',
    border: 'none',
    cursor: 'pointer',
  };

  const handleIdChange = (e) => {
    setMeetingId(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMeetingData({ ...meetingData, [name]: value });
  };

  const handleUpdate = () => {
    // Make a PUT request to update the meeting by ID
    ContactService.updateMeeting(meetingData.meetingId, meetingData)
      .then((res) => {
        setSuccessMessage('Meeting updated successfully');
        console.log(res);
        setErrorMessage('');
      })
      .catch((error) => {
        setSuccessMessage('');
        setErrorMessage('Error updating meeting: ' + error.response.data.message);
      });
  };

  return (
    <div className="meeting-container">
    <div>
      <h1 className="sch-mt">UPDATE MEETING</h1>
      
    <div className='meeting'>
      <form onSubmit={handleUpdate} style={formStyle}>
        <div style={labelStyle}>
          <label>Meeting ID:</label>
          <input
            type="text"
            name="meetingId"
            value={meetingData.meetingId}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>
        <div style={labelStyle}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={meetingData.title}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>
        <div style={labelStyle}>
          <label>Start Time:</label>
          <input
            type="datetime-local"
            name="startTime"
            value={meetingData.startTime}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>
        <div style={labelStyle}>
          <label>End Time:</label>
          <input
            type="datetime-local"
            name="endTime"
            value={meetingData.endTime}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>
        <div style={labelStyle}>
          <label>Organizer:</label>
          <input
            type="text"
            name="organizer"
            value={meetingData.organizer}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>
        <div style={labelStyle}>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={meetingData.location}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>Update</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
    </ div>
    </div>
  );
}

export default Messages;
