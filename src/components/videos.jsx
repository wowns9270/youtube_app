
import React, { Component } from 'react';
import '../app.css'

class Videos extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.gogo();
    }


    gogo(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
            };
        
            let a = fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyA3FWE39w5qseEaasvmLMnn3bcObms43pA&part=snippet&maxResults=25&q=bts", requestOptions)
                .then(response => response.text())
                .then(result => console.log("OK"))
                .catch(error => console.log('error', error));


        console.log(a);
    }

    render(){
        return (
            <h1>h1h1</h1>
        ) 
    }
}

export default Videos;
