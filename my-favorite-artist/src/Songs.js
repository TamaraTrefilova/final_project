import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Songs extends Component {

    // static propTypes = {
       
    //     name: PropTypes.string.isRequired,
    //     linkText: PropTypes.string.isRequired,
    //     songTitle: PropTypes.string,
    //     videoTitle: PropTypes.string,
    //     albumTitle: PropTypes.string,
    //     img: PropTypes.string,
    //     url:PropTypes.string.isRequired,
    //     count:PropTypes.number,
    //     order:PropTypes.number,
    //     textCount:PropTypes.string,
    //     text:PropTypes.string

    // }

    static propTypes = {
    
        linkText: PropTypes.string.isRequired,
        songTitle: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        url:PropTypes.string.isRequired,
        order:PropTypes.number.isRequired

    }


    // state = {
    //     isLoading: true,
    //     fetchResults: [],
    //     error: '',
    //     name:''
    // }


    // componentDidMount() {
    //     // this.getCharacters();
    //     let artistName = "";
    //     let choiceValue = "";
    //     let itemsSize = "";
    //     let url = "";
    //         artistName = this.props.artist;
    //         choiceValue = this.props.choice;
    //         if(this.props.size !==""){
    //             itemsSize = parseInt(this.props.size);
    //           url = `https://itunes.apple.com/search?term=${artistName}&media=music&entity=${choiceValue}&limit=${itemsSize}.`;
    //           console.log("url", url);
    //         } else {
    //             url = `https://itunes.apple.com/search?term=${artistName}&media=music&entity=${choiceValue}`;
    //         }

    //         fetch(url)
    //             .then(response => response.json())
    //             .then(data => {
    //                 console.log("data", data.results);
    //                 this.setState({
    //                     fetchResults: data.results,
    //                     isLoading: false,
    //                     name: data.results[0]['artistName']
    //                 })
    //             })
    //             .catch((error) => {
    //                 this.setState({
    //                     isLoading: false,
    //                     error: error.message
    //                 })
    //             });
    // }



    // getCharacters() {
    //     // this.getCharacters();
    //     let artistName = "";
    //     let choiceValue = "";
    //     let itemsSize = "";
    //     let url = "";
    //         artistName = this.props.artist;
    //         choiceValue = this.props.choice;
    //         if(this.props.size !==""){
    //             itemsSize = parseInt(this.props.size);
    //           url = `https://itunes.apple.com/search?term=${artistName}&media=music&entity=${choiceValue}&limit=${itemsSize}.`;
    //           console.log("url", url);
    //         } else {
    //             url = `https://itunes.apple.com/search?term=${artistName}&media=music&entity=${choiceValue}`;
    //         }

    //         fetch(url)
    //             .then(response => response.json())
    //             .then(data => {
    //                 console.log("data", data.results);
    //                 this.setState({
    //                     fetchResults: data.results,
    //                     isLoading: false,
    //                     name: data.results[0]['artistName']
    //                 })
    //             })
    //             .catch((error) => {
    //                 this.setState({
    //                     isLoading: false,
    //                     error: error.message
    //                 })
    //             });
    // }

    


    render() {
        const {songTitle, img,  linkText, order, url} = this.props;
        const styleObj = {
            fontSize: 15,
            color: "blue",
            textAlign: "center",
            paddingTop: "100px",
        }
      

        return (
            <div>
            <div className="item">            
                            <div className="songs" >
                                <h3>Track N# {order}</h3>
                                <h3>Track: {songTitle}</h3>
                                <div>
                                    <img className='image'
                                    src={img}
                                    alt='artis-image'>
                                    </img>
                                </div>
                                 <ul> <a style={styleObj} href={url} target="_blank" rel = "noopener noreferrer"> {linkText} </a> </ul>                      
                            </div>
                    
                </div>

            </div>
        );
    }

}

export  default Songs