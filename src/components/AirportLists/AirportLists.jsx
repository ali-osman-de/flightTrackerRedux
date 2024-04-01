import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchFlights, setFlightDataNull } from '../../actions/fetchFlight';
import { useDispatch, useSelector } from 'react-redux';

const AirportLists = () => {
    const flights = useSelector(state => state.flights)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchFlights())
    }, [])

    console.log(flights)

    const data = flights?.flights?.data

    const handleClickOnFlight = (index) => {
        // dispatch(setFlightDataNull(null))
        const flightNumber = data[index]?.flight?.icao;
        if (flightNumber) {

            dispatch(fetchFlights(null, flightNumber))
            navigate(`/resultPageByFlight/${flightNumber}`)
        }
    }

    function formatTimeString(dateTimeString) {
        const dateTime = new Date(dateTimeString);
        const formattedTime = dateTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        return formattedTime;
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
                    {data?.map((flight, index) => (
                        <tr key={index} onClick={() => handleClickOnFlight(index)} style={{ cursor: "pointer" }}>
                            <td>{flight.flight_date}</td>
                            <td>{flight.departure.airport} ({flight.departure.icao})</td>
                            <td>{flight.arrival.airport} ({flight.arrival.icao})</td>
                            <td>{formatTimeString(flight.departure.scheduled)}</td>
                            <td>{formatTimeString(flight.arrival.scheduled)}</td>
                            <td>{flight.airline.name} ({flight.airline.iata})</td>
                            <td>{flight.flight.icao}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AirportLists;
