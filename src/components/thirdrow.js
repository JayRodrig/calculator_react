import React from 'react';

const ThirdRow = props => {
    
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
                <div className='col col-3 button' onClick={clickHandler}>7</div>
                <div className='col col-3 button' onClick={clickHandler}>8</div>
                <div className='col col-3 button' onClick={clickHandler}>9</div>
                <div className='col col-3 button orange' onClick={operationHandler}>x</div>
            </div>
        </>    
    );
}

export default ThirdRow;