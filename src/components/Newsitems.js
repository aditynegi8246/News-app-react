import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {
  
  static propTypes = {

  }

  render() {
    let {title,description, imageURL, newsURL, author, date} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
        <img src={imageURL} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a rel="noreferrer" target="_blank" href={newsURL} className="btn btn-sm btn-dark">Read More</a>
            <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toDateString()} {new Date(date).toLocaleTimeString()}</small></p>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
