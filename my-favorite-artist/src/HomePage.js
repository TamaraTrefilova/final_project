import React, { Component } from 'react';
import Songs from './Songs';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './project.css';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            optionValue: "",
            itemsValue: "5",
            isItemsSelected: false,
            isSubmitted: false,
            isLoading: true,
            fetchResults: [],
            error: '',
            name:''
           
        };
    }


    componentDidMount() {
        // this.getCharacters();
        let artistName = "";
        let choiceValue = "";
        let itemsSize = "";
        let url = "";
        artistName = this.props.inputValue;
        choiceValue = this.props.optionValue;
            if(this.props.itemsValue !==""){
                itemsSize = parseInt(this.props.itemsValue);
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


    onInputChange = (e) => {
        const inputVal = e.target.value;
        this.setState({
            inputValue: inputVal,
            isSubmitted: false
        });
    }

    handleSelectOption = (e) => {
    const inputVal = e.target.value;
        this.setState({
            optionValue: inputVal,
            isSubmitted: false
        });
        if(inputVal!=='musicArtist'){
            this.setState({
                isItemsSelected: true,
                isSubmitted: false
            });
        }
      };


      handleSelect = (e) => {
        const inputVal = e.target.value;
            this.setState({
                itemsValue: inputVal,
                isSubmitted: false
            });
          };
    

          onSubmit = (e) => {
            e.preventDefault();
            const { inputValue, optionValue, itemsValue, isItemsSelected} = this.state;
            console.log (inputValue, optionValue, itemsValue, isItemsSelected);   
            if(inputValue ==="" || optionValue===""){
                window.alert('You need to enter something!');
                this.setState({
                    isSubmitted: false
                });
                return;
            } else {
                this.setState({
                    isSubmitted: true
                });
            }           
        }


        onCompleteHandler = () => {
            return () => {
                this.setState({
                    isSubmitted: false
                });
            }
        }


    render() {

        const { isLoading, error, fetchResults } = this.state;

        return (

            <div className="container">
              <div>
                <h1>Find your favorite Artist</h1>

                    <form className="containerChild">
                        <label >
                            Artist's name:
                        </label>
                        <input className="inputField" type="text" name="name" 
                            onChange={this.onInputChange}
                        />

                        <label>
                            What are you looking for:                      
                        </label>
                        <select 
                        onChange={this.handleSelectOption}
                        className="form-control" name="kind" id="entity">
                                <option value="choose">
                                    Choose one
                            </option>
                                <option value="musicArtist">All about the artist</option>
                                <option value="musicTrack">Songs</option>
                                <option value="album">Albums</option>
                                <option value="musicVideo">Videos</option>
                            </select>
                        <div className="itemsPerPage">
                            {this.state.isItemsSelected && <div> 
                                <label>
                                      Items per page: 
                                </label>
                                <select 
                                    onChange={this.handleSelect}
                                    className="form-control" name="kind" id="number">
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                    <option value="20">20</option>
                                </select> 
                        </div>}
                                                
                        </div>
                        
                        <button 
                            onClick={this.onSubmit}
                            className="button" 
                            type="submit" 
                            > Get Your Music
                        </button>
                    </form>
                </div>
                
                     <div>
                            { this.state.isSubmitted && 
                            <div>  
                                <div className="items-list">
                            {isLoading && <p>Loading...</p>}
                            {error && <p>{error}</p>}
                            <h1>{fetchResults['artistName']}</h1>
                            {fetchResults.map((result, idx) => {
                                return (                      
                                    <div className="music" key={idx} >
                                      {/* { this.state.optionValue==="musicArtist" &&  <div> 
                                      <ArtistComponent
                                          name ={result['artistName']}
                                          url = {result['artistLinkUrl']}   
                                        />
                                      </div> }      */}
                                      { this.state.optionValue==="musicTrack" &&  <div> 
                                      <Songs
                                        songTitle = {result['trackName']}
                                        img ={result['artworkUrl60']}
                                        linkText={'CLICK TO HEAR THE SONG'}
                                        order={idx+1}   
                                        url={result['trackViewUrl']}                      
                                        />
                                      </div> } 
                                      {/* { this.state.optionValue==="album" &&  <div>  */}
                                      {/* <ArtistComponent
                                         name ={result['artistName']}
                                         albumTitle = {result['collectionName']}
                                         img ={result['artworkUrl60']}
                                         linkText={'CLICK TO HEAR THE ALBUM'}
                                         textCount={'Track count: '}
                                         count={result['trackCount']}
                                         order={idx+1}   
                                         url={result['trackViewUrl']}
                                         text={'Album'}
                                        />
                                      </div> }  */}
                                      {/* { this.state.optionValue==="musicVideo" &&  <div>
                                      <ArtistComponent
                                        name ={result['artistName']}
                                        albumTitle = {result['collectionName']}
                                        img ={result['artworkUrl60']}
                                        linkText={'CLICK TO WATCH THE VIDEO'}
                                        order={idx+1}   
                                        url={result['trackViewUrl']}
                                        text={'Video'}
                                        /> 
                                        </div> 
                                        }                                    */}

                                    </div>
                                )
                            })}
                     </div>            
                    
                    </div>
                    }          
               </div>
            </div>
        )
    }
}

export default HomePage