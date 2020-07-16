import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCases } from '../store/actions';

const CasesList = props => {
    useEffect(() => {
        props.fetchCases();
    }, []);

    return (
        <div>
            {props.isLoading && <h4>Loading Random Quote data...</h4>}
            {props.error && (<h4>Oops, something went wrong... {props.error}</h4>)}
            {props.cases.length > 0 && ( 
                <div>
                    {props.cases.map(data => (
                       <div style={{border: '1px solid #c052d1', margin: '1%', height: '30px', padding: '1%', width: 'auto', textAlign: 'center', background: '#e9cced', color: '#282c34'}} key={data._id}>{`${data.quoteText} by ${data.quoteAuthor}`}</div> //quote component
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

