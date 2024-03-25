const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';

const fetchNewsRequest = () => ({
    type: FETCH_NEWS_REQUEST
});

const fetchNewsSuccess = (news) => ({
    type: FETCH_NEWS_SUCCESS,
    payload: news
});

const fetchNewsFailure = (error) => ({
    type: FETCH_NEWS_FAILURE,
    payload: error
});

export const fetchNews = () => {
    return async (dispatch) => {
        dispatch(fetchNewsRequest());
        try {
            const apiKey = '32a3c6d4d6544594a685f7507719369e';
            const apiKey2 = "419e18b697be411a977b2b544059cfc3"
            const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey2}`;

            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }

            const data = await response.json();
            dispatch(fetchNewsSuccess(data));
        } catch (error) {
            dispatch(fetchNewsFailure(error.message));
        }
    };
};