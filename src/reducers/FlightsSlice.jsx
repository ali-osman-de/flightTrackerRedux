const initialState = {
    flights: null,
    loading: false,
    error: null
};

const flightsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_FLIGHT_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'FETCH_FLIGHT_SUCCESS':
            return {
                ...state,
                flights: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_FLIGHT_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case "SET_FLIGHT_DATA_NULL":
            return {
                ...state,
                flightData: null
            };
        default:
            return state;
    }
};

export default flightsReducer;
