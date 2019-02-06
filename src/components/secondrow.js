import React from 'react';

const SecondRow = props => {
    
    const clickHandler = e => {
        props.update(e.target.innerText)
    }

    const operationHandler = e => {
        console.log(e.target.innerText)
        props.updateOperations(e.target.innerText);
    }

    return (
        <>    
            <div className='row'>
                <div className='col col-3 button'>AC</div>
                <div className='col col-3 button' onClick={operationHandler}>%</div>
                <div className='col col-3 button' onClick={operationHandler}>±</div>
                <div className='col col-3 button orange' onClick={operationHandler}>÷</div>
            </div>
        </>    
    );
}

export default SecondRow;