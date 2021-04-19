import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';

//testing axios and connection with rails server 
const App = () => {
  
  useEffect(() => {
    axios.get('/api/jobpostings')
      .then (res => console.log(res.data))
        .then(res => setJobpostings(res.data))
        .catch(error => console.log(error))
  }, []);

  const [jobpostings, setJobpostings] = useState([]);

  console.log(jobpostings)

  return (
      <div className="App">
        <h2>Current Jobs:</h2>
        <div>
          <ul>
            {jobpostings.map((jp) => {
              return (
                  <li>
                    {jp.company}
                  </li>
              )
            })}
          </ul>
        </div>
      </div>
  );
}

export default App;