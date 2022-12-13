import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table1 from './Components/Table1';
import Table2 from './Components/Table2';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Userlist from './Components/Userlist';
import Table3 from './Components/Table3';

export const App = () => {
    const string = "pharmacist"
    const string2 = "admin"
    const string3 = "physicians"
    const string4 = 'patient'
 return (
    <div>
        {
            (() =>{

    if (window.localStorage.getItem("role") == string2) {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/table1' element={<Table1 />} />
                    <Route path='/table2' element={<Table2 />} />
                    <Route path='/table3' element={<Table3 />} />
                    <Route path='/list' element={<Userlist />} />
                </Routes>
            </BrowserRouter>
        );
    } else if (window.localStorage.getItem("role") == string) {
        return(
        <BrowserRouter>
            <Routes>
                <Route path='/table3' element={<Table3 />} />
            </Routes>
        </BrowserRouter>
        )
    } else if (window.localStorage.getItem("role") == string3) {
        return(
        <BrowserRouter>
            <Routes>
                <Route path='/table2' element={<Table2 />} />
            </Routes>
        </BrowserRouter>
        )
    } else if (window.localStorage.getItem("role") == string4) {
        return(
        <BrowserRouter>
            <Routes>
                <Route path='/table1' element={<Table1 />} />
            </Routes>
        </BrowserRouter>
        )
    } else {
        return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Signup />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
        )
    }
            }) ()
    }
    </div>
 )
}
