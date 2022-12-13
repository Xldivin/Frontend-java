import React from 'react'
import List from './List'
import "../Styles/userlist.css"
import axios from 'axios';

function Userlist() { 
    const name = [];
    let roles = [];

     const usersl = [
        {
            "name":"Axel",
            "role":"admin"
        },
        {
            "name":"Axel",
            "role":"admin"
        }
     ]
     function usersmap(){
        const res =  axios.get(`http://localhost:5000/api/medicalrecords/user`).then((response) =>{
            let users = [];
            let role = [];
            users=response.data.data.users 
            console.log(users)
            for (var i = 0; i < users.length; i= i+2) {
                name.push(users[i]);
            }
            for (var i = 0; i < users.length; i++) {
                if(users[i] == "pharmacist" || users[i] == "admin" || users[i] == "doctor" || users[i] == "physicians" || users[i] === "patient"){
                   roles.push(users[i])
                }
            }
            console.log(name)
            console.log(roles)
        })
    }
     usersmap()
  return (
    <div>
        <h3 className='list-users'>List of users</h3>
        {
            usersl.map((user,user2) =>{
                return < List user={user} />
            })
        }
    </div>
  )
}

export default Userlist