import React from 'react';

export default function Card({ id, active, img, title, text, buttonText, onMouseEnter, onMouseLeave }) {
    return (
        <div
            // className={active === true ? 'card active-card shadow-lg' : 'card shadow'}
            className="gradient-box mb-3"
            onMouseEnter={() => onMouseEnter(id)}
            onMouseLeave={() => onMouseLeave(id)}>
            <div className="card-body d-flex flex-column">
                <img src={img} alt={title} className="mx-auto" />
                <h4 className="mx-auto text-center font-weight-bold">{title}</h4>
                <p className="mx-auto text-center ">{text}</p>
                <button className='btn btn-custom'>{buttonText}</button>
            </div>
        </div >
    )
}
