
import Nav from './../components/Nav';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect, useState } from 'react';
import { addUser } from './../redux/actions/addUser';
import { getAllUsersSucceeded, getAllUsersFailed } from './../redux/actions/getAllUsers';

function Accueil() {

    const dispatch = useDispatch();

    useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json() )
    .then(data => dispatch(getAllUsersSucceeded(data))) 
    .catch(err =>
        {
            dispatch(getAllUsersFailed(err.message))
        }
    )
    }, [dispatch])

    const [name, setName] = useState("");
    const users = useSelector(state => state.userReducer.users);
    const errMessages = useSelector(state => state.userReducer.errMessages);
    
    const handleSave = () => {
        const user = {
            name : name,
            email : "newuser@email.com",
            id : new Date()
        }
        dispatch(addUser(user));
    }
    

  return (
    <div>
       <Nav/>
        <h1>Accueil</h1>
        <ul>
            {errMessages ? errMessages :  users.map(user => {
                return (<li> <Link to={`/user/${user.id}`} >{user.name}</Link>   </li>)
            }) }
        </ul>

        <div>
            <input type="text" onChange={(e) => setName(e.target.value)}/>
            <button onClick={handleSave}>Save</button>
        </div>
    </div>
  )
}

export default Accueil