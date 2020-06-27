import React, { Component } from 'react'

export default class ShowMovieDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            click : false,
            response : this.props.movieDet
        }
        this.onimgClick = this.onimgClick.bind(this)
    }

    componentDidMount() {
        console.log("Component did mount!");
    }

    static getDerivedStateFromProps(nextProps, state) {
        console.log("Component will receive props", nextProps,state);
        if(state.response.Title === nextProps.movieDet.Title) {
            console.log(false)
            return null
        } else if (state.response.Title !== nextProps.movieDet.Title) {
            console.log("change in title", state.response.Title,nextProps.movieDet.Title)
            return {
                click : false,
                response : nextProps.movieDet
            }
        }
    }

    shouldComponentUpdate(nextProps,nextState) {
        console.timeLog("should Component Update",nextProps,nextState)
        if(this.state.response.Title === nextProps.movieDet.Title && this.state.click === nextState.click && this.props.featureArray.length === nextProps.featureArray.length ) {
            // console.log(false)
            return false
        }
            
        return true
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update", prevProps, prevState);
    }

    componentWillUnmount() {
        console.log("Component will unmount");
    }

    onimgClick = () => {
        console.log("click",this.state.click)
        this.setState({
            click : !this.state.click
        })
        console.log("click",this.state.click)
    }
    
    render() {
        
        console.log(this.props.movieDet.Poster)
        return (
            <div className="MovieDetails">

                <div className="poster">               
                <img onClick={this.onimgClick} className="image" src={this.props.movieDet.Poster} alt="poster" />
                </div>
                {this.state.click &&
                <div className="Details">
                    <ul>
                    {this.props.featureArray.map((arr,i) => {
                        return <li key={i}><b>{arr} : </b><i>{this.props.movieDet[arr]}</i></li>
                    } )}
                    </ul>

                {/* <ul>
                    <li><b>Title : </b><i>{this.props.movieDet.Title}</i></li>
                    <li><b>Year : </b><i>{this.props.movieDet.Year}</i></li>
                    <li><b>Genre : </b><i>{this.props.movieDet.Genre}</i></li>
                    <li><b>IMDB: </b><i>{this.props.movieDet.imdbRating}</i></li>
                    <li><b>Cast : </b><i>{this.props.movieDet.Actors}</i></li>
                    <li><b>Plot : </b><i>{this.props.movieDet.Plot}</i></li>
                </ul> */}
                </div>
                }
            </div>
        )
    }
}
