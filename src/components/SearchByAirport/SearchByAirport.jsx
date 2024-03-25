import React, { useState } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
} from 'mdb-react-ui-kit';
import { Input } from 'antd';
import simpleData from '../../utils/simpleData';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const { Search } = Input;

function SearchByAirport() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");
    const [inputValue, setInputValue] = useState("")
    // const flights = useSelector(state => state.flights)
    const flights = simpleData.data
    const dispatch = useDispatch()
    const navigate = useNavigate()



    const onClickSearch = () => {
        if (inputValue === "") {
            setStatus("error");
            setLoading(false)
        } else {
            setStatus("success");
            setLoading(true);
        }
    }

    const handleSearch = (value) => {
        onClickSearch();

    }

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
