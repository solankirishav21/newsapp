import React, { Component } from 'react'
import Newsitems from './Newsitems'

export class News extends Component {
    constructor(){
        super();
        this.state  ={
            articles : [],
            loading : false,
            page : 1
        }
    }
    async componentDidMount(props){
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=75db1db2637048cfbfb6f830a1383ee0&pageSize=10`;
        let data = await fetch(url);
        let parsData = await data.json();
        this.setState({
            articles : parsData.articles,
            totalArt : parsData.totalResults
        })
    }
    handlePrevPage = async (props) => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=75db1db2637048cfbfb6f830a1383ee0&page=${this.state.page - 1}&pageSize=10`;
        let data = await fetch(url);
        let parsData = await data.json();
        this.setState({
            articles : parsData.articles,
            page : this.state.page -1
        })

    }
    handleNextPage = async (props) => {
        // console.log("right"); 
     
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=75db1db2637048cfbfb6f830a1383ee0&page=${this.state.page + 1}&pageSize=10`;
            let data = await fetch(url);
            let parsData = await data.json();
            this.setState({
                articles : parsData.articles,
                page : this.state.page+1
            })
        
    }
    render() {
        return (
            <div className="container my-4">
               <center><h1>NewsMan - Top Headlines</h1></center> 
                <div className="row my-3">
                    {this.state.articles.map ((element) => {
                        return  <div className="col-md-4 " key={element.url}>
                        <Newsitems title={element.title} description = {element.description} imgUrl={element.urlToImage} newsUrl = {element.url}  />
                    </div>
                    })}
                </div>
                <div className="d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-primary btn-sm" onClick={this.handlePrevPage}>&larr; Previous</button>
                    <button disabled =  {this.state.page>=4} type="button" className="btn btn-primary btn-sm" onClick={this.handleNextPage}>Next &rarr;</button>
                </div>
        </div>
        )
    }
}

export default News
