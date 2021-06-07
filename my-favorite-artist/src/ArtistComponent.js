import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ArtistComponent extends Component {

    static propTypes = {
       
        artist: PropTypes.string.isRequired,
        choice: PropTypes.string.isRequired,
        size: PropTypes.string.isRequired
    }

    state = {
        isLoading: true,
        fetchResults: [],
        error: '',
        name:''
    }


    componentDidMount() {
        // this.getCharacters();
        let artistName = "";
        let choiceValue = "";
        let itemsSize = "";
        let url = "";
            artistName = this.props.artist;
            choiceValue = this.props.choice;
            if(this.props.size !==""){
                itemsSize = parseInt(this.props.size);
              url = `https://itunes.apple.com/search?term=${artistName}&media=music&entity=${choiceValue}&limit=${itemsSize}.`;
              console.log("url", url);
            } else {
                url = `https://itunes.apple.com/search?term=${artistName}&media=music&entity=${choiceValue}`;
            }

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log("data", data.results);
                    this.setState({
                        fetchResults: data.results,
                        isLoading: false,
                        name: data.results[0]['artistName']
                    })
                })
                .catch((error) => {
                    this.setState({
                        isLoading: false,
                        error: error.message
                    })
                });
    }



    getCharacters() {
        // this.getCharacters();
        let artistName = "";
        let choiceValue = "";
        let itemsSize = "";
        let url = "";
            artistName = this.props.artist;
            choiceValue = this.props.choice;
            if(this.props.size !==""){
                itemsSize = parseInt(this.props.size);
              url = `https://itunes.apple.com/search?term=${artistName}&media=music&entity=${choiceValue}&limit=${itemsSize}.`;
              console.log("url", url);
            } else {
                url = `https://itunes.apple.com/search?term=${artistName}&media=music&entity=${choiceValue}`;
            }

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log("data", data.results);
                    this.setState({
                        fetchResults: data.results,
                        isLoading: false,
                        name: data.results[0]['artistName']
                    })
                })
                .catch((error) => {
                    this.setState({
                        isLoading: false,
                        error: error.message
                    })
                });
    }

    


    render() {
        const { isLoading, error, fetchResults } = this.state;
        const styleObj = {
            fontSize: 15,
            color: "blue",
            textAlign: "center",
            paddingTop: "100px",
        }
      

        return (
            <div>
            <div className="items-list">
                    {isLoading && <p>Loading...</p>}
                    {error && <p>{error}</p>}
                    <h1>{this.state.name}</h1>
                    {fetchResults.map((result, idx) => {
                        let url = result['trackViewUrl'];
                        let odrer = idx+1;
                        return (
                                        
                            <div className="songs" key={idx} >
                                <h3>Track N# {odrer}</h3>
                                <h3>Track: {result['trackName']}</h3>
                                <div>
                                    <img className='image'
                                    src={result['artworkUrl60']}
                                    alt='artis-image'>
                                    </img>
                                </div>
                                 <ul> <a style={styleObj} href={url} target="_blank" rel = "noopener noreferrer">Click to hear the track </a> </ul>                      
                            </div>
                        )
                    })}
                </div>

            </div>
        );
    }

}

export  default ArtistComponent