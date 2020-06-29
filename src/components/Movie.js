import ShowMovieDetails from './ShowMovieDetails'
import React, { Component } from 'react'

export default class Movie extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            value : '',
            status : false,
            response : {},
            comment : false,
            checkarr : ["Title","Year","Genre","imdbRating","Actors","Plot"],
            checkBoxState: [],
            checkBoxStatus: [true,true,true,true,true,true]
            
            // checkarr : ["Title","Year","Genre","imdbRating","Actors","Plot"]
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidUpdate() {
        console.log("component Did Update Parent")

    }

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
                // value : ''
            })            
        } else if (rjson.Response === "False") {
            this.setState({
                status : false,
                comment : true
            })
        }
    
    }

    onType = (event) => {
        // console.log(event.target.value)
        // console.log(this)
        this.setState({
            value : event.target.value
        })
    }

    checkBox = (event,i) => {
        console.log("i : ",i)
        let stat = [...this.state.checkBoxStatus]
        stat[i] = !stat[i]
        let a = [...this.state.checkarr]
        // let stat = [...this.state.checkBoxStatus]
        // stat[i] = !stat[i]
        let rend = false
        let count = 0
        console.log(a)
        console.log(event.target.value)
        if(event.target.checked === true) {
            a.push(event.target.value)
            console.log(a)
        }else if(event.target.checked === false) {
            a= a.filter((s) => { return (s !== event.target.value)})
            console.log(a)
        }
        
        if(this.state.checkarr.length !== a.length) {
            rend = true
        } else if(this.state.checkarr.length === a.length) {
            for(let i=0 ; i<this.state.checkarr.length; i++) {
                if(a[i] === this.state.checkarr[i]){
                    count = count + 1
                }else {
                    count = count - 1
                }
            }
            if (count === a.length){
                rend = false
            } else { rend = true}
        }

        if(rend === true){
            this.setState({
                checkarr: a,
                checkBoxStatus: stat
                // checkBoxStatus: stat
            })
        }
    }
    


    render() {
        

        return (
            <React.Fragment>
                <div className="header">
                
                    <div className='heading'>
                    <h3>Movie Search</h3>
                    </div>
                    
                </div>
                <div className="form" >
                <form onSubmit={this.handleSubmit}>
                <div className='search_bar'>
                <label>Movie Name : </label>
                <input type='text' className='search' onChange={this.onType} value={this.state.value} ></input>
                </div>

                <div className="checkboxes">
                <input type="checkbox" id="Title" onChange={(e) => this.checkBox(e,0)} checked={this.state.checkBoxStatus[0]} name="box1" value="Title"/>
                <label htmlFor="Title">Title</label>
                <input type="checkbox" id="Year" onChange={(e) => this.checkBox(e,1)} checked={this.state.checkBoxStatus[1]} name="box1" value="Year"/>
                <label htmlFor="Year">Year</label>
                <input type="checkbox" id="Genre" onChange={(e) => this.checkBox(e,2)} checked={this.state.checkBoxStatus[2]} name="box1" value="Genre"/>
                <label htmlFor="Genre">Genre</label>
                <input type="checkbox" id="imdbRating" onChange={(e) => this.checkBox(e,3)} checked={this.state.checkBoxStatus[3]} name="box1" value="imdbRating"/>
                <label htmlFor="imdbRating">IMDB</label>
                <input type="checkbox" id="Actors" onChange={(e) => this.checkBox(e,4)} checked={this.state.checkBoxStatus[4]} name="box1" value="Actors"/>
                <label htmlFor="Actors">Actors</label>
                <input type="checkbox" id="Plot" onChange={(e) => this.checkBox(e,5)} checked={this.state.checkBoxStatus[5]} name="box1" value="Plot"/>
                <label htmlFor="Plot">Plot</label>
                </div>

                <button type='submit'>Search</button>
                </form>
                </div>
                {this.state.status ? <ShowMovieDetails 
                featureArray = {this.state.checkarr}
                movieDet ={this.state.response} 
                /> : ''}
                {this.state.comment ? "Check the Name Once again !!! " : ''}

            </React.Fragment>
        )
    }
}

