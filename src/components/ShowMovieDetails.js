import React, { Component } from 'react'

export default class ShowMovieDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            click : this.props.onclickImg,
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
                click : nextProps.onclickImg,
                response : nextProps.movieDet
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update", prevProps, prevState);
    }

    componentWillUnmount() {
        console.log("Component will unmount");
    }

    onimgClick = () => {
        console.log(this.state.click)
        this.setState({
            click : !this.state.click
        })
        console.log(this.state.click)
    }
    
    render() {
        // console.log(this.props.movieDet.Title)
        // console.log(this.props.movieDet.Poster)
        
        const a = { pic_url : this.props.movieDet.Poster}
        console.log(a.pic_url)
        return (
            <div className="MovieDetails">

                <div className="poster">               
                <img onClick={this.onimgClick} className="image" src={a.pic_url} alt="poster" />
                </div>
                {this.state.click &&
                <div className="Details">
                <ul>
                    <li><b>Title : </b><i>{this.props.movieDet.Title}</i></li>
                    <li><b>Year : </b><i>{this.props.movieDet.Year}</i></li>
                    <li><b>Genre : </b><i>{this.props.movieDet.Genre}</i></li>
                    <li><b>IMDB: </b><i>{this.props.movieDet.imdbRating}</i></li>
                    <li><b>Cast : </b><i>{this.props.movieDet.Actors}</i></li>
                    <li><b>Plot : </b><i>{this.props.movieDet.Plot}</i></li>
                </ul>
                </div>
                }
            </div>
        )
    }
}
