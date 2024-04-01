import React, { useState } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
} from 'mdb-react-ui-kit';
import {
    Select,
    Input,
    Button
} from 'antd';
import "./SearchByFlight.css";
import simpleData from '../../utils/simpleData';
import { fetchFlights } from '../../actions/fetchFlight';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const { Search } = Input;


function SearchByFlight() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const flightDataRedux = useSelector(state => state.flights)
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");
    const [inputValue, setInputValue] = useState("")
    const flightData = simpleData.data
    const [selectedAirline, setSelectedAirline] = useState("");
    const [flightNumber, setFlightNumber] = useState("");




    const options = flightData.map((flight, index) => ({
        value: index,
        label: flight.airline.name
    }));

    const changeOnInput = (e) => {
        setInputValue(e.target.value)
    };

    const handleClickButton = () => {
        const combineFlightNumber = selectedAirline + flightNumber
        if (selectedAirline === "" || flightNumber === "") {
            setStatus("error");
            setLoading(false)
        } else {
            setStatus("success");
            setLoading(true);
            console.log(combineFlightNumber)
            dispatch(fetchFlights(null, combineFlightNumber))
            console.log(flightDataRedux)
            navigate(`resultPageByFlight/${combineFlightNumber}`)
        }
    };

    return (
        <>
            <MDBCard
                className='cardFlight shadow-5 my-5'
                style={{
                    height: "400px",
                    width: "500px"
                }}
            >
                <MDBCardBody>
                    <MDBCardTitle className='fs-1 fw-normal p-3'>Search by Airline</MDBCardTitle>
                    <div className='m-5'>
                        <Select
                            defaultValue={flightData[0].airline.name}
                            style={{
                                width: "200px",
                            }}
                            options={options}
                            onChange={(value) => setSelectedAirline(flightData[value]?.airline.icao)}
                        />
                    </div>
                    <div className='mt-1 mb-4'>
                        <Input
                            placeholder="Flight Number"
                            style={{
                                width: "200px",
                            }}
                            status={status}
                            onChange={(e) => setFlightNumber(e.target.value)}
                        />
                    </div>
                    <Button
                        size='medium'
                        type="primary rounded-8"
                        loading={loading}
                        onClick={handleClickButton}
                    >
                        Search by Airline
                    </Button>
                </MDBCardBody>
            </MDBCard>
        </>
    );
}

export default SearchByFlight;
