import React from 'react'
import "../Styles/table.css"
import { useNavigate } from 'react-router-dom';
import {CSVLink} from 'react-csv'

function Table2() {
    const datas = [
        {2000:"Lagos",2001:'Burundi',2002:"Lisbon"},
        {2000:"Cyprus",2001:"Drc",2002:"Marseille"},
        {2000:"Malawi",2001:"Congo",2002:"Kinshasa"},
        {2000:"Rwanda",2001:"Mozambique",2002:"Senegal"},
    ]
    const navigate = useNavigate();
    function logout (){
        localStorage.clear();
        navigate("/login");
    }
    return (
        <div>
            <div className='buttonslog'>
            <button className='logout' onClick={logout}>Logout</button>
            <CSVLink
            data={datas}
            filename={"Physicians mission"}
            target="_blank"
            >
            Download
            </CSVLink>
            </div>
            <h3 className='header'>Physicians missions 2000-2002</h3>
            <table>
                <tr>
                    <th>2000</th>
                    <th>2001</th>
                    <th>2002</th>
                </tr>
                {
                    datas.map(
                        (data,key) =>{
                            return(
                                <tr>
                                    <td>{data[2000]}</td>
                                    <td>{data[2001]}</td>
                                    <td>{data[2002]}</td>
                                </tr>
                            )
                        }
                    )
                }
            </table>
        </div>
    )
}

export default Table2