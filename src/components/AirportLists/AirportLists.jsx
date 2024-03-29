import React, { useEffect } from 'react';
// import simpleData from '../../utils/simpleData';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchFlights } from '../../actions/fetchFlight';
import { useDispatch, useSelector } from 'react-redux';

const AirportLists = () => {
    const flights = useSelector(state => state.flights)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const param = useParams()

    useEffect(() => {
        dispatch(fetchFlights())
    }, [])
    
    console.log(flights)

    const data = flights?.flights?.data

    const handleClickOnFlight = () => {
        navigate("/resultPageByAirline")
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
                        <tr key={index} onClick={handleClickOnFlight} style={{
                            cursor: "pointer"
                        }}>
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
