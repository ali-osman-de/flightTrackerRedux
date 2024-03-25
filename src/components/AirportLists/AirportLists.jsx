import React, { useEffect } from 'react';
import simpleData from '../../utils/simpleData';
import { useNavigate } from 'react-router-dom';
import { fetchFlights } from '../../actions/fetchFlight';
import { useDispatch, useSelector } from 'react-redux';

const AirportLists = () => {
    const flights = useSelector(state => state.flights)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // useEffect(() => {
    //     dispatch(fetchFlights())
    // }, [])

    const data = simpleData.data

    // console.log(flights)


    const handleClickOnFlight = () => {
        navigate("/")
    }

    return (
        <div className='my-5'>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Departure Airport</th>
                        <th scope="col">Arrival Airport</th>
                        <th scope="col">Departure Time</th>
                        <th scope="col">Arrival Time</th>
                        <th scope="col">Airline</th>
                        <th scope="col">Flight Number</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((flight, index) => (
                        <tr key={index} onClick={handleClickOnFlight} style={{
                            cursor: "pointer"
                        }}>
                            <td>{flight.flight_date}</td>
                            <td>{flight.departure.airport} ({flight.departure.icao})</td>
                            <td>{flight.arrival.airport} ({flight.arrival.icao})</td>
                            <td>{flight.departure.scheduled}</td>
                            <td>{flight.arrival.scheduled}</td>
                            <td>{flight.airline.name} ({flight.airline.iata})</td>
                            <td>{flight.flight.number}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AirportLists;
