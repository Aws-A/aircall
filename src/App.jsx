import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';

const App = () => {
  const [showArchived, setShowArchived] = useState(true); // State to toggle between archived and unarchived calls
  const [selectedCall, setSelectedCall] = useState(null); // Track the currently selected call

  const handleToggle = () => {
    setShowArchived(!showArchived); // Toggle state
  };

  function showdetails1(event, callId) {
    if (selectedCall === callId) {
      setSelectedCall(null); // Hide the details if the same call is clicked again
    } else {
      setSelectedCall(callId); // Show the details of the clicked call
    }
  }

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
        {showArchived ? (
          <div id="archived">
            <div className="calls" onClick={(e) => showdetails1(e, 'call1')}>
              <span id="call1"> Ryan L. </span>
              <img src="./images/call.png" className="small-img" />
            </div>
            {selectedCall === 'call1' && (
              <div className="details details1">
                <span className='date'> Wednesday 22/01/2025</span>
                <span className='time'> 20:20 P.M </span>
                <div className='duration'> Time: 15: 49 </div>
              </div>
            )}
            <div className="calls" onClick={(e) => showdetails1(e, 'call2')}>
              <span id="call2"> Diana Williams </span>
              <img src="./images/missed.png" className="small-img" />
            </div>
            {selectedCall === 'call2' && (
              <div className="details details2">
                <span className='date'> Tuesday 21/01/2025</span>
                <span className='time'> 21:00 P.M </span>
                <div className='duration'> Time: 20: 10 </div>
              </div>
            )}
            <div className="calls" onClick={(e) => showdetails1(e, 'call3')}>
              <span id="call3"> Nadia D. </span>
              <img src="./images/received.png" className="small-img" />
            </div>
            {selectedCall === 'call3' && (
              <div className="details details3">
                <span className='date'> Monday    20/01/2025</span>
                <span className='time'> 09:15 A.M </span>
                <div className='duration'> Time: 5: 40 </div>
              </div>
            )}
          </div>
        ) : (
          <div id="unarchived">
            <div className="calls" onClick={(e) => showdetails1(e, 'call4')}>
              <span id="call4"> 647-555-7777 </span>
              <img src="./images/received.png" className="small-img" />
            </div>
            {selectedCall === 'call4' && (
              <div className="details details4">
                <span className='date'> Sunday 19/01/2025</span>
                <span className='time'> 15:30 P.M </span>
                <div className='duration'> Time: 8: 20 </div>
              </div>
            )}
            <div className="calls" onClick={(e) => showdetails1(e, 'call5')}>
              <span id="call5"> 416-931-9311 </span>
              <img src="./images/noresponse.png" className="small-img" />
            </div>
            {selectedCall === 'call5' && (
              <div className="details details5">
                <span className='date'> Saturday  18/01/2025</span>
                <span className='time'> 11:00 A.M </span>
                <div className='duration'> Time: 7:40 </div>
              </div>
            )}
          </div>
        )}
      </div>
      <div id='buttons'>
        <button className="btn archAll"> Archive All Calls</button>
        <br/>
        <button className="btn unarchAll"> Unarchive All Calls</button>
      </div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;