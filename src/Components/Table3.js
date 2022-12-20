import React from 'react'
import "../Styles/table.css"
import { useNavigate } from 'react-router-dom';
import {CSVLink} from 'react-csv'

function Table3() {
    const navigate = useNavigate();
    function logout (){
        localStorage.clear();
        navigate("/login");
    }
    const datas = [
        {2000:"Paracetamol",2001:'Cold cup',2002:"Paracetamol"},
        {2000:"Kinini",2001:"Kinini",2002:"hedex"},
        {2000:"Luartem",2001:"Luartem",2002:"Kinini"},
        {2000:"hedex",2001:"hedex",2002:"Luartem"},
    ]
    return (
        <div>
            <div className='buttonslog'>
            <button className='logout' onClick={logout}>Logout</button>
            <CSVLink
            data={datas}
            filename={"Most Bought Drugs"}
            target="_blank"
            >
            Download Csv
            </CSVLink>
            </div>
            <h3 className='header'>Most Bought Drugs 2000-2002</h3>
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
export default Table3