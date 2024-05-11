import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromUsers } from "../../context/userSlice"
import './Users.css'


function Users({ data }) {
    const dispatch = useDispatch()
  return (
    <div className='Users' >
        {
            data.map(user => {
                return(
                    <div className="card">
                    <img src={user.url} alt="..." />
                    <h2>{user.name}</h2>
                    <p>{user.surName}</p>
                    <p>{user.email}</p>
                    <button onClick={() => dispatch(removeFromUsers(user))} >Remove</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Users