import React from 'react';

const SingleSide = ({ item }) => (
    <div>
        <div className="divider">
        </div>
        <a href={item.url} target='_blank' rel='noreferrer'>
            <h2>{item.source.name}</h2>
            <p>{item.title} by {item.author}</p>
        </a>

    </div>
)
export default SingleSide;