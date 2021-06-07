import React, { Component } from 'react';
import './project.css';
import PropTypes from 'prop-types';
class Artist extends Component {

    static propTypes = {
       
        artist: PropTypes.string.isRequired,
        choice: PropTypes.string.isRequired,
        size: PropTypes.string.isRequired
    }

    state = {
        isLoading: true,
        fetchResults: [],
        error: '',
        name:'',
        artistUrl: ''
    }


    componentDidMount() {
        let artistName = "";
        let choiceValue = "";
        let url = "";
            artistName = this.props.artist;
            choiceValue = this.props.choice;
           
            url = `https://itunes.apple.com/search?term=${artistName}&media=music&entity=${choiceValue}`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        fetchResults: data.results,
                        isLoading: false,
                        name: data.results[0]['artistName'],
                        artistUrl:data.results[0]['artistLinkUrl']

                    })
                })
                .catch((error) => {
                    this.setState({
                        isLoading: false,
                        error: "Nothing Found – Sorry, but nothing matched ... "
                    })
                });
    }


    render() {
        const { isLoading, error, name, artistUrl } = this.state;
        const styleObj = {
            fontSize: 15,
            color: "blue",
            textAlign: "center",
            paddingTop: "100px",
        }
      

        return (
            <div>
            <div className="item">
                    {isLoading && <p>Loading...</p>}
                    {error && <h3>{error}</h3>}
                    {!error && <div>
                        <h1>{name}</h1>
                    <div className="artis">
                        <ul> <a style={styleObj} href={artistUrl} target="_blank" rel = "noopener noreferrer">Click to see  info about the artist </a> </ul>                      
                    </div>
                    </div>}
                    
                </div>

            </div>
        );
    }

}

export default Artist