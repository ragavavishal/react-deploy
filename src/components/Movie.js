import ShowMovieDetails from './ShowMovieDetails'
import React, { Component } from 'react'

export default class Movie extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            value : '',
            status : false,
            response : {},
            comment : false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // componentDidUpdate() {
    //     const url = "http://www.omdbapi.com/?i=tt3896198&apikey=41425427&"

    // }

    async handleSubmit(event) {
        event.preventDefault();
        const url = "https://www.omdbapi.com/?i=tt3896198&apikey=41425427&t="
        const movie = this.state.value
        console.log(url+movie)
        const a = await fetch(url+movie)
        // console.log(a)
        const rjson = await a.json()
        // console.log(rjson)
        console.log(rjson.Response)
        if (rjson.Response === "True"){
            this.setState({
                status : true,
                response : rjson,
                comment : false,
                value : ''
            })            
        } else if (rjson.Response === "False") {
            this.setState({
                status : false,
                comment : true
            })
        }
    
    }

    onType = (event) => {
        event.preventDefault();
        // console.log(event.target.value)
        // console.log(this)
        this.setState({
            value : event.target.value
        })
    }
    


    render() {

        return (
            <React.Fragment>
                <div className="header">
                
                    <div className='heading'>
                    <h3>Movie Search</h3>
                    </div>
                    
                </div>
                <div className='form'>
                <form onSubmit={this.handleSubmit}>
                <label>Movie Name : </label>
                <input type='text' className='search' onChange={this.onType} value={this.state.value} ></input>
                <button type='submit'>Search</button>
                </form>
                </div>
                {this.state.status ? <ShowMovieDetails 
                onclickImg ={false} 
                movieDet ={this.state.response} 
                /> : ''}
                {this.state.comment ? "Check the Name Once again !!! " : ''}

            </React.Fragment>
        )
    }
}

