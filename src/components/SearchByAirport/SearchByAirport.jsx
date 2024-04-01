import React, { useEffect, useState } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
} from 'mdb-react-ui-kit';
import { Input } from 'antd';
import simpleData from '../../utils/simpleData';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchFlights } from '../../actions/fetchFlight';

const { Search } = Input;

function SearchByAirport() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");
    const [inputValue, setInputValue] = useState("")
    const flights = useSelector(state => state.flights)
    // const flights = simpleData.data
    // const flightError = "error"
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const error = flights?.error;

    useEffect(() => {
        if (error && error === "Airport or flight code is required.") {
            setStatus("error");
            setLoading(false);
        }
    }, [error, flights]);

    const onClickSearch = () => {
        if (inputValue === "") {
            setStatus("error");
            setLoading(false);
        } else {
            setStatus("");
            setLoading(true);
            dispatch(fetchFlights(inputValue))
            navigate(`/resultPageByAirport/${inputValue}`)

        }

    };

    const handleSearch = (value) => {
        onClickSearch();

    }

    const changeOnInput = (e) => {
        setInputValue(e.target.value)
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
                <MDBCardBody className='d-flex justify-content-center'
                    style={{
                        flexDirection: "column"
                    }}
                >
                    <MDBCardTitle className='fs-1 fw-normal p-3'>Search by Airport</MDBCardTitle>
                    <div className='m-5'>
                        <Search
                            style={{
                                width: 300,
                            }}
                            placeholder="Airport Name (exm. LTFM)"
                            enterButton="Search"
                            size="large"
                            loading={loading}
                            onSearch={handleSearch}
                            onChange={changeOnInput}
                            status={status}
                        />
                    </div>
                </MDBCardBody>
            </MDBCard >
        </>
    )
}

export default SearchByAirport;
