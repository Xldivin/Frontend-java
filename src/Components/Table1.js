import React from 'react'
import "../Styles/table.css"

function Table1() {
    return (
        <div>
            <h3 className='header'>Patient illnesses 2000-2002</h3>
            <table>
                <tr>
                    <th>2000</th>
                    <th>2001</th>
                    <th>2002</th>
                </tr>
                <tr>
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
                </tr>
            </table>
        </div>
    )
}

export default Table1