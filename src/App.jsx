import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';

const App = () => {
  const [showArchived, setShowArchived] = useState(true); // State to toggle between archived and unarchived calls
  const [selectedCall, setSelectedCall] = useState(null); // Track the currently selected call
  const [archivedCalls, setArchivedCalls] = useState([
    { id: 'call1', name: 'Ryan L.', img: './images/call.png', date: 'Wednesday 22/01/2025', time: '20:20 P.M', duration: '15:49' },
    { id: 'call2', name: 'Diana Williams', img: './images/missed.png', date: 'Tuesday 21/01/2025', time: '21:00 P.M', duration: '20:10' },
    { id: 'call3', name: 'Nadia D.', img: './images/received.png', date: 'Monday 20/01/2025', time: '09:15 A.M', duration: '5:40' },
  ]); // Archived calls
  const [unarchivedCalls, setUnarchivedCalls] = useState([
    { id: 'call4', name: '647-555-7777', img: './images/received.png', date: 'Sunday 19/01/2025', time: '15:30 P.M', duration: '8:20' },
    { id: 'call5', name: '416-931-9311', img: './images/noresponse.png', date: 'Saturday 18/01/2025', time: '11:00 A.M', duration: '7:40' },
  ]); // Unarchived calls

  const handleToggle = () => {
    setShowArchived(!showArchived); // Toggle between archived and unarchived views
  };

  const showDetails = (callId) => {
    // Only allow showing details for calls in the archived list
    if (archivedCalls.some((call) => call.id === callId)) {
      setSelectedCall((prevCall) => (prevCall === callId ? null : callId)); // Toggle details
    }
  };

  const archiveAll = () => {
    // Move all unarchived calls to archived
    setArchivedCalls([...archivedCalls, ...unarchivedCalls]);
    setUnarchivedCalls([]); // Clear unarchived calls
  };

  const unarchiveAll = () => {
    // Move all archived calls to unarchived
    setUnarchivedCalls([...unarchivedCalls, ...archivedCalls]);
    setArchivedCalls([]); // Clear archived calls
  };

  const renderCall = (call) => (
    <React.Fragment key={call.id}>
      <div className="calls" onClick={() => showDetails(call.id)}>
        <span id={call.id}>{call.name}</span>
        <img src={call.img} className="small-img" />
      </div>
      {selectedCall === call.id && archivedCalls.some((c) => c.id === call.id) && (
        <div className={`details ${call.id}`}>
          <span className="date">{call.date}</span>
          <span className="time">{call.time}</span>
          <div className="duration">Time: {call.duration}</div>
        </div>
      )}
    </React.Fragment>
  );

  return (
    <div className="container">
      <Header />
      <div className="container-view">
        <div id="title"> List of Calls </div>
      </div>
      <div className="toggle-container">
        <label className="toggle">
          <input
            type="checkbox"
            className="toggle-input"
            onChange={handleToggle}
            checked={!showArchived} // Bind state to the checkbox
          />
          <span className="toggle-slider">
            <span className="text-left">Archived Calls</span>
            <span className="text-right">Unarchived Calls</span>
          </span>
        </label>
      </div>
      <div id="allCalls">
        {showArchived
          ? archivedCalls.map((call) => renderCall(call))
          : unarchivedCalls.map((call) => renderCall(call))}
      </div>
      <div id="buttons">
        <button className="btn archAll" onClick={archiveAll}>
          Archive All Calls
        </button>
        <br />
        <button className="btn unarchAll" onClick={unarchiveAll}>
          Unarchive All Calls
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;