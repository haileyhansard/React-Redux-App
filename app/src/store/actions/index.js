import axios from "axios";

export const FETCH_CASES_START = 'FETCH_CASES_START';
export const FETCH_CASES_SUCCESS = 'FETCH_CASES_SUCCESS';
export const FETCH_CASES_FAILURE = 'FETCH_CASES_FAILURE';

export const fetchCases = () => {
    return dispatch => {
        dispatch ({ type: FETCH_CASES_START });
        axios
            .get("https://quote-garden.herokuapp.com/api/v2/quotes")
            .then(res => {
                dispatch({ type: FETCH_CASES_SUCCESS, payload: res.data.quotes });
            })
                
            .catch(err => {
                dispatch({ type: FETCH_CASES_FAILURE, payload: err.message })
            });
    };
};

// .get("https://api.covid19api.com/live/country/south-africa/status/confirmed")
//             .then("response", res => {
//                 dispatch({ type: FETCH_CASES_SUCCESS, payload: res.data.country });
//                 console.log("response", res);
//             })
//             .catch(err => {
//                 dispatch({ type: FETCH_CASES_FAILURE, payload: err.message })
//             });