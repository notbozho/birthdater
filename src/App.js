import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/users').then(response => {
      
      setUsers(response.data)
    }).catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>hi</h1>
      {users.map(u => <h1>{u.firstName}</h1>)}
    </div>
  );
}

export default App;
