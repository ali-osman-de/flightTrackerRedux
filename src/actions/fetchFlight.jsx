const FETCH_FLIGHT_REQUEST = 'FETCH_FLIGHT_REQUEST';
const FETCH_FLIGHT_SUCCESS = 'FETCH_FLIGHT_SUCCESS';
const FETCH_FLIGHT_FAILURE = 'FETCH_FLIGHT_FAILURE';
const SET_FLIGHT_DATA_NULL = "SET_FLIGHT_DATA_NULL"

export const setFlightDataNull = () => ({
    type: SET_FLIGHT_DATA_NULL
});

const fetchFlightRequest = () => ({
    type: FETCH_FLIGHT_REQUEST
});

const fetchFlightSuccess = (flights) => ({
    type: FETCH_FLIGHT_SUCCESS,
    payload: flights
});

const fetchFlightFailure = (error) => ({
    type: FETCH_FLIGHT_FAILURE,
    payload: error
});

export const fetchFlights = (airport, flightCode) => {
    return async (dispatch) => {
        dispatch(fetchFlightRequest());
        try {
            const apiKey = 'fdfd4b3b1586460892b250565d5c4ce2';
            let apiUrl = '';

            if (airport) {
                apiUrl = `//api.aviationstack.com/v1/flights?dep_icao=${airport}&access_key=${apiKey}`;
            } else if (flightCode) {
                apiUrl = `//api.aviationstack.com/v1/flights?flight_icao=${flightCode}&access_key=${apiKey}`;
            } else {
                throw new Error('Airport or flight code is required.');
            }

            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch flight data');
            }

            const data = await response.json();
            dispatch(fetchFlightSuccess(data));
        } catch (error) {
            dispatch(fetchFlightFailure(error.message));
        }
    };
};