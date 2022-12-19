import React from 'react'
import "../Styles/table.css"
import { useNavigate } from 'react-router-dom';

function Table2() {
    const navigate = useNavigate();
    function logout (){
        localStorage.clear();
        navigate("/login");
    }
    return (
        <div>
            <button className='logout' onClick={logout}>Logout</button>
            <h3 className='header'>Physicians missions 2000-2002</h3>
            <table>
                <tr>
                    <th>2000</th>
                    <th>2001</th>
                    <th>2002</th>
                </tr>
                <tr>
                    <td>Lagos</td>
                    <td>Burundi</td>
                    <td>Lisbone</td>
                </tr>
                <tr>
                    <td>Cyprus</td>
                    <td>Drc</td>
                    <td>Marseille</td>
                </tr>
                <tr>
                    <td>Malawi</td>
                    <td>Congo</td>
                    <td>Kinshasa</td>
                </tr>
                <tr>
                    <td>Rwanda</td>
                    <td>Mozambique</td>
                    <td>Senegal</td>
                </tr>
            </table>
        </div>
    )
}

export default Table2