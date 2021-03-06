import React from 'react';

const TopRow = props => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                  <div className='col col-12 top-row'>{props.displayValue}</div>
                </div>
            </div>
        </>
    );
}   

export default TopRow;