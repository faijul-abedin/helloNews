import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import Spinner from './Spinner';

export default class News extends Component {
    
    constructor(){
        super();
        // console.log("Hello I am constructor from news component");
        this.state = {
            articles: [],
            loading: true
        }
      }

     async componentDidMount(){
          console.log("cdm");
          let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=8413ca9226e2411aa02ffe4acadd5bab";
          let data = await fetch(url);
          let parseData = await data.json();
          console.log(parseData);
          this.setState({articles: parseData.articles})
      }

  render() {
    return (
      <div className="container my-3">
        <h2 className='text-center'><b>HelloNews (Latest News Feed)</b></h2>
        {/* {this.state.loading && <Spinner/>} */}
        {/* {this.state.articles.map((element)=>{console.log(element)})} */}

        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className='col-md-4 my-3' key={element.url}>
            <NewsItem className='imageItem' title={element.title.slice(0, 45)} description={element.description.slice(0, 90)} imgUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
        })}


            {/* <div className='col-md-4'>
            <NewsItem title="my title" description="my description" imgUrl="https://s.yimg.com/os/creatr-uploaded-images/2022-06/406bdc50-e27e-11ec-9bfe-9320e971852b"/>
            </div> */}
            {/* <div className='col-md-4'>
            <NewsItem title="my title" description="my description"/>
            </div>
            <div className='col-md-4'>
            <NewsItem title="my title" description="my description"/>
            </div> */}

            {/* </div>
            <div className="row my-3">
            <div className='col-md-4'>
            <NewsItem title="my title" description="my description"/>
            </div>
            <div className='col-md-4'>
            <NewsItem title="my title" description="my description"/>
            </div>
            <div className='col-md-4'>
            <NewsItem title="my title" description="my description"/>
            </div> */}


            </div>

        </div>

    )
  }
}
