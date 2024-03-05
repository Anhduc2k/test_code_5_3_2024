import React, { useEffect, useState } from 'react';
import './App.css';
import { User } from './types';
import { UserList } from './components/UserList';
import axios from "axios";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||  user.phone.includes(searchTerm)
     || user.email.includes(searchTerm)
  );
  return (
    <>
      <div className='container mt-5'>
        <h1>User Search App Demo</h1>
        <input
          type="text"
          placeholder="Search by name, phone or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <UserList users={filteredUsers} loading={loading}/>
      </div>
    </>
  );
}

export default App;
