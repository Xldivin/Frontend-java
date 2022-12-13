import React, {useState} from 'react';
import "../Styles/login.css"
import { Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();
    function handleSubmit(event) {
        let check = false;
        event.preventDefault()
        const data = new FormData(event.target)
        axios
            .post("http://localhost:5000/api/medicalrecords/login", {
                email: data.get("email"),
                password: data.get("password")
            })
            .then((response) => {
                console.log(response.data.role)
                check = response.data.success
                if (response.data.role == "admin") {
                    alert("Logged in")
                    window.localStorage.setItem("role", response.data.role);
                    navigate("/table1");
                } else if(response.data.role == "pharmacist") {
                    alert("Logged in")
                    window.localStorage.setItem("role", response.data.role);
                    navigate("/table3");
                } else if(response.data.role == "patient") {
                    alert("Logged in")
                    window.localStorage.setItem("role", response.data.role);
                    navigate("/table4");
                } else if(response.data.role == "physician") {
                    alert("Logged in")
                    window.localStorage.setItem("role", response.data.role);
                    navigate("/table2");
                } else {
                    navigate("/");
                }
            });
    }


    return (
        <div className='container'>
            <div className='box'>
                <form className='form' onSubmit={handleSubmit} >
                    <h3 className='headerlog'>Welcome to Medical Records</h3>
                    <input placeholder='email' name='email' className='input1' />
                    <input placeholder='password' name='password' type="password" className='input2' />
                    <p to="" className='link'>
                        <Link to="/">
                        Don't have an account yet
                        </Link>
                    </p>
                    <button type='submit' className='button'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
