import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';

//testing axios and useEffect/useState
const App = () => {
  useEffect(() => {
    axios.get('/api/jobpostings')
        .then(res => setJobPostings(res.data))
        .catch(error => console.log(error))
  }, []);

  const [jobpostings, setJobPostings] = useState([]);

  return (
      <div className="App">
        <h2>Current Jobs:</h2>
        <div>
          <ul>
            {jobpostings.map((b,idx) => {
              return (
                  <li>
                    {idx}. {b}
                  </li>
              )
            })}
          </ul>
        </div>
      </div>
  );
}

export default App;