import React from 'react';
import './styles.css';

const Progress = ({ scroll }) => {
    return (
        <div className='progress' style={{ 
            background: `linear-gradient(to right, #14a0dc ${scroll}%, #fff ${scroll}%)`
        }} />
    )
}

export default Progress;