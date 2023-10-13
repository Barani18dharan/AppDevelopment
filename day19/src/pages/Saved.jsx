import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Meeting.css';
import { ContactService } from '../Services/ContactService';

function Saved() {
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMeeting = async () => {
    let response = await ContactService.getAllMeetings();
    console.log(response);
    if (response.data.length !== 0) {
      setMeetings(response.data);
      setLoading(false);
    } else {
      console.log("Unable to fetch");
    }
  }

  useEffect(() => {
    fetchMeeting();
  }, []);

  const tableCellStyle = {
    border: '1px solid #000',
    padding: '8px',
  textAlign: 'left',
  minWidth: '100px', // Set your desired width
  };

  return (
    <div className='meeting'>
      <h2>Meeting List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={tableCellStyle}>Title</th>
              {/* <th style={tableCellStyle}>Start Time</th>
              <th style={tableCellStyle}>End Time</th> */}
              <th style={tableCellStyle}>Organizer</th>
              <th style={tableCellStyle}>Location</th>
            </tr>
          </thead>
          <tbody>
            {meetings && meetings.map((meeting) => (
              <tr key={meeting.id}>
                <td style={tableCellStyle}>{meeting.title}</td>
                {/* <td style={tableCellStyle}>{meeting.startTime}</td>
                <td style={tableCellStyle}>{meeting.endTime}</td> */}
                <td style={tableCellStyle}>{meeting.organizer}</td>
                <td style={tableCellStyle}>{meeting.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Saved;
