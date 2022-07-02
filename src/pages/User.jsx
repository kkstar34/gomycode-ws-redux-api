import React from 'react'
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';

function User() {

    const users = useSelector(state => state.userReducer.users)
    const userId = useParams().id
    const user = users.find(user => user.id == userId);
    
  return (
    <div>
        <h1>Details de l'utilisateur</h1>
        <ul>
            <li>{user.name}</li>
            <li>{user.email}</li>
        </ul>
    </div>
  )
}

export default User