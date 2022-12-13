import React from 'react'
import "../Styles/table.css"

function Table3() {
    return (
        <div>
            <h3 className='header'>Most Bought Drugs 2000-2002</h3>
            <table>
                <tr>
                    <th>2000</th>
                    <th>2001</th>
                    <th>2002</th>
                </tr>
                <tr>
                    <td>Paracetamol</td>
                    <td>Cold cup</td>
                    <td>Paracetamol</td>
                </tr>
                <tr>
                    <td>Kinini</td>
                    <td>Kinini</td>
                    <td>hedex</td>
                </tr>
                <tr>
                    <td>Luartem</td>
                    <td>Luartem</td>
                    <td>Kinini</td>
                </tr>
                <tr>
                    <td>hedex</td>
                    <td>hedex</td>
                    <td>Luartem</td>
                </tr>
            </table>
        </div>
    )
}
export default Table3