import React from 'react'
import "../Styles/table.css"
import { useNavigate } from 'react-router-dom';
import {CSVLink} from 'react-csv'

function Table1() {
    const datas = [
        {2000:"Malaria",2001:"Lyphbia",2002:"Fever"},
        {2000:"Typhoid",2001:"Neurophobia",2002:"Diarhea"},
        {2000:"Hiv",2001:"Tactophobia",2002:"Malaria"},
        {2000:"Cancer",2001:"Lusophoibia",2002:"Marasme"},
    ]
    const headers = [
        {year1:"2000",year2:"2001",year3:"2003"},
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
            filename={"Patient Data"}
            target="_blank"
            >
            Download
            </CSVLink>
            </div>
            <h3 className='header'>Patient illnesses 2000-2002</h3>
            <table>
                <tbody>
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
                </tbody>
            </table>
        </div>
    )
}

export default Table1

{/* <tr>
<td>Malaria</td>
<td>Lyphbia</td>
<td>Fever</td>
</tr>
<tr>
<td>Typhoid</td>
<td>Neurophobia</td>
<td>Diarhea</td>
</tr>
<tr>
<td>Hiv</td>
<td>Tactophobia</td>
<td>Malaria</td>
</tr>
<tr>
<td>Cancer</td>
<td>Lusophoibia</td>
<td>Marasme</td>
</tr> */}