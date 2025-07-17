import React, { Component } from 'react'
import NewsItem from './Newsitems'
import PropTypes from 'prop-types'



export default class News extends Component {
  static defaultProps = {
    category:'politics',
    pagesize:8,
    country:'us'
  }
  static propTypes = {
    category:PropTypes.string,
    pagesize:PropTypes.number,
    country:PropTypes.string
  }
  
  constructor(){
    super();
    this.state={
        articles: [],
        loading: false,
        page: 1,
        totalresults:0
    }
  }
  async componentDidMount(){
    let newsapi= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0413c45e963847128f5afaf46e94f89a&page=1&pagesize=${this.props.pagesize}`
    let data= await fetch(newsapi)
    let parseddata = await data.json()
    console.log(parseddata)
    this.setState({articles: parseddata.articles})
    this.setState({totalresults:parseddata.totalResults})
  }
  handleprevclick=async ()=>
  {
    let newsapi= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0413c45e963847128f5afaf46e94f89a&pagesize=${this.props.pagesize}&page=${this.state.page -1}`
    let data= await fetch(newsapi)
    let parseddata = await data.json()
    this.setState({articles: parseddata.articles})
    this.state.page-=1;
  }
  handlenextclick=async ()=>
  {
    
    let newsapi= `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=0413c45e963847128f5afaf46e94f89a&pagesize=${this.props.pagesize}&page=${this.state.page + 1}`
    let data= await fetch(newsapi)
    let parseddata = await data.json()
    this.setState({articles: parseddata.articles})   
    this.state.page+=1;
    
  }


  render() {
    return (
      <div>
        
        <h1 className="text-center my-5" >News Headlines</h1>
        <div className="row">
        {this.state.articles.map((element)=>{
        return <div key={element.url} className='col-md-3'>
            <NewsItem date={element.publishedAt} author={element.author} title={element.title?element.title.slice(0,60):""} description={element.description?element.description.slice(0,90):""} imageURL={element.urlToImage} newsURL={element.url} />
        </div>
        })}
        </div>
        <div className="container d-flex justify-content-between fixed-bottom my-2">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleprevclick}>&larr; Previous</button>
          <button disabled={this.state.page === Math.ceil(this.state.totalresults/this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>
        </div>
        
      </div>
    )
  }
}
