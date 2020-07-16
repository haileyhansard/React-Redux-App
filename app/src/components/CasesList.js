import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCases } from '../store/actions';

const CasesList = props => {
    useEffect(() => {
        props.fetchCases();
    }, []);

    return (
        <div>
            {props.isLoading && <h4>Loading COVID 19 data...</h4>}
            {props.error && (<h4>Oops, something went wrong... {props.error}</h4>)}
            {props.cases.length > 0 && ( 
                <div>
                    {props.cases.map(data => (
                        key={quote.quoteText} cases={data} //confused on this part, cant get it to work
                    ))}
                </div>
            )}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        cases: state.cases,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { fetchCases }
)(CasesList);

