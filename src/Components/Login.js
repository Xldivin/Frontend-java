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
                if (response.data.role.logged == "admin") {
                    alert("Logged in")
                    window.localStorage.setItem("role", response.data.role.logged);
                    navigate("/table1");
                } else if(response.data.role.logged == "pharmacist") {
                    alert("Logged in")
                    window.localStorage.setItem("role", response.data.role.logged);
                    navigate("/table3");
                } else if(response.data.role.logged == "patient") {
                    alert("Logged in")
                    window.localStorage.setItem("role", response.data.role.logged);
                    navigate("/table4");
                } else if(response.data.role.logged == "physician") {
                    alert("Logged in")
                    window.localStorage.setItem("role", response.data.role.logged);
                    navigate("/table2");
                } else {
                    navigate("/");
                }
            });
    }


    return (
        <div className='container'>
            <div className='box1'>
                <form className='form' onSubmit={handleSubmit} >
                    <h3 className='headerlog'>Welcome to Medical Records</h3>
                    <p to="" className='link'>
                    Don't have an account?
                        <Link to="/">
                            Sign up
                        </Link>
                    </p>
                    <div className='inputseclog'>
                    <input placeholder='email' name='email' className='input1log' />
                    <input placeholder='password' name='password' type="password" className='input2log' />
                    </div>
                    <button type='submit' className='button1'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
