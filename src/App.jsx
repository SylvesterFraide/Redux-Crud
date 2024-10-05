import './App.css'
import { useSelector } from 'react-redux';
import { addUser, deleteUser, updateUser } from './features/users';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.user.value);

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [newUsername, setnewUsername] = useState('');
  return (
    <div className="container">
      <div className="addUser">
        <input type="text"
          placeholder='Name...'
          onChange={(event) => setName(event.target.value)} />
        <input type="text"
          placeholder='Username...'
          onChange={(event) => setUsername(event.target.value)} />
        <button
          onClick={() => { dispatch(addUser({ id: userList[userList.length - 1, + 1], name, username })) }} >
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {
          userList.map((users) => {
            return <div>
              <h3 >{users.name}</h3>
              <h3>{users.username} </h3>
              <input type='text'
                placeholder='New username..'
                onChange={(event) => { setnewUsername(event.target.value) }} />
              <button onClick={() => dispatch(updateUser({ id: users.id, username: newUsername }))}> Update User </button>
              <button onClick={() => dispatch(deleteUser({ id: users.id }))}>Delete User</button>
            </div>
          })
        }
      </div>

    </div>
  );
}
export default App