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

const { Search } = Input;





function SearchByFlight() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");
    const [inputValue, setInputValue] = useState("")
    const flightData = simpleData.data


    const options = flightData.map((flight, index) => ({
        value: index,
        label: flight.airline.name
    }));

    const handleClickButton = () => {
        if (inputValue === "") {
            setStatus("error");
            setLoading(false)
        } else {
            setStatus("success");
            setLoading(true);
        }
    };

    const changeOnInput = (e) => {
        setInputValue(e.target.value)
    };

    return (
        <>
            <MDBCard
                className='cardFlight shadow-4 my-5'
                style={{
                    height: "400px",
                    width: "500px"
                }}
            >
                <MDBCardBody>
                    <MDBCardTitle className='fs-1 fw-normal p-3'>Search by Airline</MDBCardTitle>
                    <div className='m-5'>
                        <Select
                            defaultValue="Turkish Airlines"
                            style={{
                                width: "200px",
                            }}
                            options={options}
                        />
                    </div>
                    <div className='mt-1 mb-4'>
                        <Input
                            placeholder="Flight Number"
                            style={{
                                width: "200px",
                            }}
                            status={status}
                            onChange={changeOnInput}
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
