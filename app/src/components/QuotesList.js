import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchQuotes } from '../store/actions';
import QuoteBox from './QuoteBox';

const QuotesList = props => {
    useEffect(() => {
        props.fetchQuotes();
    }, []);

    return (
        <>
        <div>
            {props.isLoading && <h4>Loading Random Quote data...</h4>}
            {props.error && (<h4>Oops, something went wrong... {props.error}</h4>)}
            {props.quotes.length > 0 && ( 
                <div>
                    {props.quotes.map(data => (
                       <div style={{border: '1px solid #c052d1', margin: '1%', height: '30px', padding: '1%', width: '400px', textAlign: 'center', background: '#e9cced', color: '#282c34'}} key={data._id}>{`${data.quoteText} by ${data.quoteAuthor}`}</div> //quote component
                    ))}
                </div>
            )}
        </div>
        <QuoteBox />
        </>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        quotes: state.quotes,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { fetchQuotes }
)(QuotesList);

