import React, { useState } from 'react';
import axios from 'axios';
import { ContactService } from '../Services/ContactService';
import './Meeting.css';
import { headers } from '../Constants/ApiConstant';

function Analytics() {
  const [meetingId, setMeetingId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleIdChange = (e) => {
    setMeetingId(e.target.value);
  };

  const handleDelete = () => {
    const url = 'http://localhost:8080/api/meetings/' + meetingId;

    axios
      .delete(url, { headers: headers })
      .then((res) => {
        setSuccessMessage('Meeting deleted successfully');
        console.log(res);
        setErrorMessage('');
      })
      .catch((error) => {
        setSuccessMessage('');
        setErrorMessage('Error deleting meeting: ' + error.response.data.message);
      });
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left',
    margin: '20px 0',
  };

  const thStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '8px',
    fontWeight: 'bold',
  };

  const tdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
  };

  return (
    <div className="meeting">
      <h2>Delete Meeting</h2>
      <table style={tableStyle}>
        <tbody>
          <tr>
            <td style={tdStyle}>
              <label>Meeting ID:</label>
              <input type="text" value={meetingId} onChange={handleIdChange} />
            </td>
            <td style={tdStyle}>
              <button onClick={handleDelete} style={{ background: '#ff0000', color: 'white', border: 'none', padding: '8px 16px', cursor: 'pointer' }}>
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default Analytics;
