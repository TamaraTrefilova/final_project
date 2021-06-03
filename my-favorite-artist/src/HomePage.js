import React, { Component } from 'react';

class HomePage extends Component {
    render() {

        return (

            <div className="container">
                <h1>Find your favorite Artist</h1>

                <form className="containerChild">
                    <label for="artistName">
                        Artist's name:
                        <input type="text" name="name" />
                    </label>
                    <label for="options">
                        What are you looking for:
                        <select class="form-control" name="kind" id="entity">
                            <option value="choose" selected="selected" disabled>
                                Choose one
                          </option>
                            <option value="musicArtist">All about the artist</option>
                            <option value="musicTrack">Songs</option>
                            <option value="album">Albums</option>
                            <option value="musicVideo">Videos</option>
                        </select>
                    </label>
                    <label for="options">
                        Items per page: 
                         <select class="form-control" name="kind" id="items">
                            <option value="option1">5</option>
                            <option value="option2">10</option>
                            <option value="option3">15</option>
                            <option value="option4">20</option>
                        </select>
                    </label>
                    <input className="button" type="submit" value="Get Your Music" />
                </form>

            </div>
        )
    }
}

export default HomePage