import React, { Component } from 'react';
import NewsSingle from './NewsSingle';
import Error from "./Error";
import Loader from "./Loader";

class News extends Component {
    constructor (props)
    {
        super(props);
        this.state = {
            news: [],
            error: false,
            loading: true
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
                    news: data.articles,
                    loading: false
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
        if ( this.state.loading )
        {
            return <Loader/>
        }
        else if ( !this.state.error )
        {
            return this.state.news.map((item, index) => (
                <NewsSingle item={item} key={item.url} />
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