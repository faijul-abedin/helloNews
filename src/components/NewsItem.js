import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {

    let{title, description, imgUrl, newsUrl} = this.props;

    return (
      <div>
        <div className="card bg-dark text-light mx-1" /*style={{width: "18rem"}}*/>
  <img src={imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={newsUrl} target="blank" className="btn btn-success">Read in Detail</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
