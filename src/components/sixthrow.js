import React from 'react';

const SixthRow = props => {
    
    const clickHandler = e => {
        console.log(e.target.innerText)
        props.update(e.target.innerText)
    }

    const operationHandler = e => {
        console.log(e.target.innerText)
        props.updateOperations(e.target.innerText);
    }

    return (
        <>    
            <div className='row'>
                <div className='col col-6 button' onClick={clickHandler}>0</div>
                <div className='col col button'>.</div>
                <div className='col col button orange' onClick={operationHandler}>=</div>
            </div>
        </>    
    );
}

export default SixthRow;