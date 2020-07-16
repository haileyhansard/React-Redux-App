import {
    FETCH_CASES_START,
    FETCH_CASES_SUCCESS,
    FETCH_CASES_FAILURE
} from '../actions';

const initialState = {
    isLoading: false,
    cases: [],
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CASES_START:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_CASES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                cases: action.payload,
                error: ''
            };
        case FETCH_CASES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};