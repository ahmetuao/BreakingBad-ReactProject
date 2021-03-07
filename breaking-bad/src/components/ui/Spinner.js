import React from 'react'
import spinnerGif from '../../img/spinner.gif';

const Spinner = () => {
    return (
        <img src={spinnerGif} style={{width: '200px', margin: 'auto', display: 'block'}} alt='loading'></img>
    )
}

export default Spinner
