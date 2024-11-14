import React from 'react';

const NewsSingle = ({ item }) => (
    <div className="col s12 m4">
        <div className="card hoverable">
            <div className="card-image">
                {
                    item.urlToImage ? (
                        <img className='responsive-img' src={item.urlToImage} alt={item.title}/>
                    ) : <img className='responsive-img' src='https://placehold.co/600x400?text=No\nImage' alt='No image'/>
                }
            </div>
            <div className="card-content">
            <span className="card-title"><i>{item.source.name}</i></span>
                <span className="card-title"><i>{ item.author && item.source.name !== item.author ? item.author : '' }</i></span>
                <span className="card-title"><i>{ new Date(item.publishedAt).toLocaleString() }</i></span>
                <span className='flow-text'>{item.title}</span>
            </div>
            <div className="card-action">
                <a href={item.url} target='_blank' rel='noreferrer'>Read more</a>
            </div>
        </div>
    </div>
)
export default NewsSingle;