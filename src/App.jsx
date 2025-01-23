import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';

const App = () => {
  const [showArchived, setShowArchived] = useState(true); // State to toggle between archived and unarchived calls

  const handleToggle = () => {
    setShowArchived(!showArchived); // Toggle state
  };
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
            <div className="calls">
              <span id="call1" onClick={showdetails1()}> Ryan L. </span>
              <img src="./images/call.png" className="small-img" />
            </div>
            <div className="details details1">
              <span className='date'> Sunday 20/01/2025</span>
              <span className='time'> 20:20 P.M </span>
              <div className='duration'> Time: 15: 49 </div>
            </div>
            <div className="calls">
              <span id="call2"> Diana Williams </span>
              <img src="./images/missed.png" className="small-img" />
            </div>
            <div className="calls">
              <span id="call3"> Nadia D. </span>
              <img src="./images/received.png" className="small-img" />
            </div>
          </div>
        ) : (
          <div id="unarchived">
            <div className="calls">
              <span id="call4"> 647-555-7777 </span>
              <img src="./images/received.png" className="small-img" />
            </div>
            <div className="calls">
              <span id="call5"> 416-931-9311 </span>
              <img src="./images/noresponse.png" className="small-img" />
            </div>
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
