import React from 'react'
import '../Styles/signup.css'
import { Link } from "react-router-dom"
import axios from "axios"

function Signup() {

    function handleSubmit(event) {
        let check = false;
        event.preventDefault()
        const data = new FormData(event.target)
        axios
            .post("http://localhost:5000/api/medicalrecords/signup", {
                firstname: data.get("firstname"),
                lastname: data.get("lastname"),
                email: data.get("email"),
                password: data.get("password"),
                age: data.get("age"),
                gender: data.get("gender"),
                role: data.get("role")
            })
            .then((response) => {
                console.log(response.data.message.Data)
                check = response.data.message.Data
                if (check == "User added") {
                    alert("Data added")
                } else {
                    alert("Data not added")
                }
            });
    }
    return (
        <div className='container'>
            <div  className='box'>
                <form className='form' onSubmit={handleSubmit} >
                <h3 className='headerlog'>Welcome to Medical Records</h3>
                    <input placeholder='First Name' name='firstname' className='input1'/>
                    <input placeholder='Last Name' name='lastname' className='input2'/>
                    <input placeholder='Email' name='email' className='input4'/>
                    <input placeholder='Password' name='password' type="password" className='input5'/>
                    <input placeholder='Age' name='age' className='input3'/>
                    <input placeholder='Gender' name='gender' className='input4'/>
                    <select name="role" className='input6'>
                        <option value="pharmacist">pharmacist</option>
                        <option value="patient">patient</option>
                        <option value="physician">physician</option>
                        <option value="admin">admin</option>
                    </select>
                    <p className='link'>
                        <Link to="/login">
                        Have an account?
                        </Link>
                    </p>
                    <button type='submit' className='button'>Signup</button>
                </form>
            </div>
        </div>
    )
}

export default Signup