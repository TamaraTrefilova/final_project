import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { withRouter } from "react-router";
import './project.css';

class Artist extends Component {


    // state = {
    //     isLoading: true,
    //     characters: [],
    //     error: ''
    // }


    // componentDidMount() {
    //     // this.getCharacters();
    //     const url = `https://swapi.dev/api/people/`;

    //     fetch(`${url}?per_page=100`)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log("data", data.results);
    //             this.setState({
    //                 characters: data.results,
    //                 isLoading: false
    //             })
    //         })
    //         .catch((error) => {
    //             this.setState({
    //                 isLoading: false,
    //                 error: error.message
    //             })
    //         });
    // }

    // getCharacters = () => {
    //     const url = `https://swapi.dev/api/people/`;

    //     fetch(`${url}?per_page=100`)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log("data", data.results);
    //             this.setState({
    //                 characters: data.results,
    //                 isLoading: false
    //             })
    //         })
    //         .catch((error) => {
    //             this.setState({
    //                 isLoading: false,
    //                 error: error.message
    //             })
    //         });
    // }

    render() {
        // const { isLoading, error, artist } = this.state;

        // const styleObj = {
        //     fontSize: 20,
        //     color: "white",
        //     textAlign: "center",
        //     paddingTop: "100px",
        // }
        return (
            <div className="artist-list">
                {/* {isLoading && <p>Loading...</p>}
                {error && <p>{error}</p>}

                {characters.map((artist, idx) => {
                    return (

                        <div className="artist" key={idx}>
                            <h1>{artist.name}</h1>
                            <li><Link style={styleObj} to={`/swapi.dev/api/people/${(idx)}/`}> Click to see {character.name} details</Link></li>
                        </div>
                    )
                })} */}
            </div>
        )
    }

}

export default withRouter(Artist)