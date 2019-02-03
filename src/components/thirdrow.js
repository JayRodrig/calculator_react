import React from 'react';

const ThirdRow = props => {
    
    const clickHandler = e => {
        console.log(e.target.innerText)
        props.update(e.target.innerText)
    }

    return (
        <>    
            <div className='row'>
                <div className='col col-3 button' onClick={clickHandler}>7</div>
                <div className='col col-3 button' onClick={clickHandler}>8</div>
                <div className='col col-3 button' onClick={clickHandler}>9</div>
                <div className='col col-3 button orange'>x</div>
            </div>
        </>    
    );
}

export default ThirdRow;