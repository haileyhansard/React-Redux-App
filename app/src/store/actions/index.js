import axios from "axios";

export const FETCH_QUOTES_START = 'FETCH_QUOTES_START';
export const FETCH_QUOTES_SUCCESS = 'FETCH_QUOTES_SUCCESS';
export const FETCH_QUOTES_FAILURE = 'FETCH_QUOTES_FAILURE';

export const fetchQuotes = () => {
    return dispatch => {
        dispatch ({ type: FETCH_QUOTES_START });
        axios
            .get("https://quote-garden.herokuapp.com/api/v2/quotes")
            .then(res => {
                dispatch({ type: FETCH_QUOTES_SUCCESS, payload: res.data.quotes });
            })
                
            .catch(err => {
                dispatch({ type: FETCH_QUOTES_FAILURE, payload: err.message })
            });
    };
};

// .get("https://api.covid19api.com/live/country/south-africa/status/confirmed")
//             .then("response", res => {
//                 dispatch({ type: FETCH_QUOTES_SUCCESS, payload: res.data.country });
//                 console.log("response", res);
//             })
//             .catch(err => {
//                 dispatch({ type: FETCH_QUOTES_FAILURE, payload: err.message })
//             });