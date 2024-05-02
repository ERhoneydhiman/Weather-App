import React from 'react'

function Card(props) {
    return (
        <div className='card'>
            <div className="data">
                <p id='city'>{props.city}</p>
                <p>{props.region} || {props.country}</p>
                <div className="weather1">
                    <p id='temp'>{props.tempc} &deg;C</p>
                    <div className="icon">
                        <img src={props.icon} alt="weather icon" />
                        <p>{props.text}</p>
                    </div>
                    <p id='temp'>{props.tempf} &deg;F</p>
                </div>
                <div className="weather2">
                <table>
                    <tr>
                        <th>Humidity </th>
                        <td>{props.humidity}</td>
                    </tr>
                    <tr>
                        <th>Wind Speed </th>
                        <td>{props.w_speed} kph</td>
                    </tr>
                    <tr>
                        <th>Atmospheric Pressure </th>
                        <td>{props.pressure} mbar</td>
                    </tr>
                </table>

                </div>
                <p id='last-update'>Last Update : {props.last_update}</p>
            </div>
        </div>
    )
}

export default Card