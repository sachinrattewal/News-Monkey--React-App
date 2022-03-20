import React from 'react';
import loading from './loading.gif';

export default function Spinner() {
    return (
        <div className='text-center' style={{marginTop: "15%"}}>
            <img src={loading} alt="loading" />
        </div>
    )
}

