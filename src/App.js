import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import UsersList from './components/UsersList/UsersList';
import UsersForm from './components/UsersForm/UsersForm';

function App() {

  const [users, setUsers] = useState([])
  const [userSelected, setUserSelected] = useState({})

  useEffect(()=>{
    axios.get('https://users-crud1.herokuapp.com/users/')
         .then(res=>setUsers(res.data))
  },[])

  const getUsers = ()=>{
    axios.get('https://users-crud1.herokuapp.com/users/')
         .then(res=>setUsers(res.data))
  }

  const deleteUser = (user)=>{
    axios.delete(`https://users-crud1.herokuapp.com/users/${user.id}/`)
         .then(()=>getUsers())
  }

  const selectUser =(user)=>{
      setUserSelected(user)
  }

  
  return (
    <div className="App">
      <UsersList users={users} deleteUser={deleteUser} selectUser={selectUser}/>
      <UsersForm getUsers={getUsers} userSelected={userSelected} setUserSelected={setUserSelected}/>
      
    </div>
  );
}

export default App;
