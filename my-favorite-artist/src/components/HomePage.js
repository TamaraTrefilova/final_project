import React, { Component } from 'react';
import Songs from './Songs';
import Artist from './Artist';
import Album from './Album';
import Video from './Video';
import './project.css';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            optionValue: "",
            itemsValue: "5",
            isItemsSelected: false,
            isSubmitted: false
           
        };
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
                window.alert('Please, enter search criteria!');
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
                        value={this.state.todoItem}/>

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
                        > Get Your Music</button>
                    </form>
                </div>
                
                <div>
                { this.state.isSubmitted && <div>
                    { this.state.optionValue==='musicTrack' && 
                     <div>              
                        <Songs
                            artist ={this.state.inputValue}
                            choice = {this.state.optionValue}
                            size={this.state.itemsValue} 
                        />
                    
                    </div>
                    }      
                     { this.state.optionValue==='musicArtist' && 
                     <div>              
                        <Artist
                            artist ={this.state.inputValue}
                            choice = {this.state.optionValue}
                            size={this.state.itemsValue} 
                        />
                    
                    </div>
                    }      
                    { this.state.optionValue==='album' && 
                     <div>              
                        <Album
                            artist ={this.state.inputValue}
                            choice = {this.state.optionValue}
                            size={this.state.itemsValue} 
                        />
                    
                    </div>
                    }      
                    { this.state.optionValue==='musicVideo' && 
                     <div>              
                        <Video
                            artist ={this.state.inputValue}
                            choice = {this.state.optionValue}
                            size={this.state.itemsValue} 
                        />
                    
                    </div>
                    }          


                    </div>}
                        
               </div>
            </div>
        )
    }
}

export default HomePage