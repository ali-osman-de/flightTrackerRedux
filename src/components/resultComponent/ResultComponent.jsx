import { Tag } from "antd"
import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit"
import { useSelector } from "react-redux"
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";


function ResultComponent() {
    const flights = useSelector(state => state.flights)
    const flightData = flights?.flights?.data
    console.log(flightData)

    function getHourMinuteFromDate(dateString) {
        const date = new Date(dateString);
        const hour = date.getHours();
        const minute = date.getMinutes();
        const hourMinute = `${hour}:${minute < 10 ? '0' + minute : minute}`;
        return hourMinute;
    }

    return (
        <>
            {flightData && flightData.length > 0 ? (
                <MDBCard className='mb-4'>
                    {flightData.map((data, index) => (
                        <MDBCardBody key={index}>
                            <div>
                                <p className="fw-light fs-7 text-muted">{data?.airline?.name}</p>
                                <MDBCardTitle className='d-flex justify-content-between align-items-center fs-4 fw-light'>{data?.flight?.icao}
                                    <Tag className="fs-5 text-capitalize" color={"warning"}>{data?.flight_status}</Tag>
                                </MDBCardTitle>
                                <div className="d-flex justify-content-between align-items-center my-4">
                                    <div className="fs-5 fw-light">
                                        <div>
                                            <FaPlaneDeparture style={{ marginRight: "1rem" }} />   {data.departure.icao} - {data.departure.airport}
                                        </div>
                                        <div className="mt-4">
                                            <FaPlaneArrival style={{ marginRight: "1rem" }} /> {data.arrival.icao} - {data.arrival.airport}
                                        </div>
                                    </div>
                                    <div className="my-3">

                                    </div>
                                    <div className="fs-5 fw-light">
                                        <div>
                                            {getHourMinuteFromDate(data.departure.estimated_runway)}
                                        </div>
                                        <div className="mt-4">
                                            {getHourMinuteFromDate(data.arrival.estimated_runway)}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <MDBCardText className="my-5">
                                <MDBTable className="fs-6" borderless>
                                    <MDBTableHead>
                                        <tr>
                                            <th scope='col'></th>
                                            <th scope='col'>Airport</th>
                                            <th scope='col'>Gate</th>
                                            <th scope='col'>Terminal</th>
                                            <th scope='col'>Estimated</th>
                                            <th scope='col'>Actual</th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        <tr>
                                            <th scope='row'>Departure</th>
                                            <td>{data?.departure.airport}</td>
                                            <td>{data?.departure.gate}</td>
                                            <td>{data?.departure.terminal}-</td>
                                            <td>{getHourMinuteFromDate(data?.departure?.estimated)}</td>
                                            <td>{getHourMinuteFromDate(data?.departure?.actual)}</td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>Arrival</th>
                                            <td>{data?.arrival.airport}</td>
                                            <td>{data?.arrival.gate}-</td>
                                            <td>{data?.arrival.terminal}</td>
                                            <td>{getHourMinuteFromDate(data?.arrival?.estimated)}</td>
                                            <td>{getHourMinuteFromDate(data?.arrival?.actual)}</td>
                                        </tr>
                                    </MDBTableBody>
                                </MDBTable>
                            </MDBCardText>
                        </MDBCardBody>
                    ))}
                </MDBCard>
            ) : (
                <div className="text-center">
                    <p>No flight data available.</p>
                </div>
            )}
        </>
    )
}

export default ResultComponent
