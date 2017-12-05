import React from 'react';

export default (props) => {
    return (
        <div className="card">
            <img src={props.image} alt="" className="card-img-top"/>

            <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
                <span className="card-text">Comments: {props.comments}</span>
                <a href={props.link} className="btn btn-link">Link</a>
            </div>
        </div>
    )
}