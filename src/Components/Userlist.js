import React, { useState,useEffect } from 'react'
import List from './List'
import "../Styles/userlist.css"
import axios from 'axios';

function Userlist() { 
    const [users,setUsers]= useState([])
    useEffect(() =>{
        axios.get(`http://localhost:5000/api/medicalrecords/user`)
        .then(res =>{
            console.log(res)
            setUsers(res.data.data.users)
        })
    })
  return (
    <div>
        <h3 className='list-users'>List of users</h3>
        {
            users.map((user) =>{
                return < List user={user} />
            })
        }
    </div>
  )
}

export default Userlist