import React from 'react';
import './Sessions.css';
import StarIcon from '@material-ui/icons/Star';

function Sessions({ time, length, name, instructor, rating, reviews, location, credits }) {
    return (
        <li className="sessions">
            <div className="session__time">
                {time}<br />
                {length}
            </div>
            <div className="session__details">
                <h4>{name}</h4>
                <small>{instructor}</small><br />
                <div className="session__rating-info">
                    <small><strong>{rating}</strong></small>
                    <div className="session__ratings">
                        <StarIcon />
                    </div>
                    <small>({reviews})</small>
                </div>
            </div>
            <div className="session__location">
                <small>{location}</small>
            </div>            
            <div className="session__credits">
                <button>
                    {credits}
                </button>
            </div>
        </li>
    )
}

export default Sessions
