import React, { Component } from 'react';
import SingleSide from './SingleSide';
import Error from "./Error";

class News extends Component {
    constructor (props)
    {
        super(props);
        this.state = {
            sidenews: [],
            error: false
        }
    }
    // `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.REACT_APP_API}`;
    componentDidMount () {
        const url =
            `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=${process.env.REACT_APP_API}`;
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then((data) => {
                this.setState({
                    sidenews: data.articles
                })
            })
            .catch((error) => {
                this.setState({
                    error: true
                })
                console.log(error);
            })
    }
    renderItems() {
        if ( !this.state.error )
        {
            return this.state.sidenews.map((item, index) => (
                <SingleSide item={item} key={item.url} />
            ))
        }
        else
        {
            return <Error/>
        }
    }
    render ()
    {
        return (
            <div className='row'>
                { this.renderItems() }
            </div>
        )
    }
}
export default News;