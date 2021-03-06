import React, { Component } from 'react';
import './project.css';
import PropTypes from 'prop-types';

class Album extends Component {

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
        let artistName = "";
        let choiceValue = "";
        let itemsSize = "";
        let url = "";
            artistName = this.props.artist;
            choiceValue = this.props.choice;
            if(this.props.size !==""){
                itemsSize = parseInt(this.props.size);
              url = `https://itunes.apple.com/search?term=${artistName}&media=music&entity=${choiceValue}&limit=${itemsSize}.`;
            } else {
                url = `https://itunes.apple.com/search?term=${artistName}&media=music&entity=${choiceValue}`;
            }

            fetch(url)
                .then(response => response.json())
                .then(data => {

                    this.setState({
                        fetchResults: data.results,
                        isLoading: false,
                        name: data.results[0]['artistName']
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
        const { isLoading, error, fetchResults } = this.state;
        const styleObj = {
            fontSize: 15,
            color: "blue",
            textAlign: "center",
            paddingTop: "100px",
        }
      

        return (
            <div className="flex-container-child">
            <div>
                    {isLoading && <p>Loading...</p>}
                    {error && <h3>{error}</h3>}
                    <h1>{this.state.name}</h1>
                    {fetchResults.map((result, idx) => {
                        let odrer = idx+1;         
                        return (

                            <div className="container1" key={idx}>
                            <div className='description'>
                                <h3>Number# {odrer}</h3>
                                <h3>Album: {result['collectionName']}</h3>
                                <h3>Track count: {result['trackCount']}</h3>
                                  <div>
                                  <img className='image'
                                  src={result['artworkUrl100']}
                                  alt='artis-image'>
                                  </img>
                                  <ul> <a style={styleObj} href={result['collectionViewUrl']} target="_blank" rel = "noopener noreferrer">Click to review the Album </a> </ul>                      
                            </div>                       
                          </div>
                              
                      </div>
                  
                        )
                    })}
                </div>

            </div>
        );
    }

}

export  default Album