import React, { Component } from 'react';
import axios from 'axios';

class Time extends Component {
    constructor(props) {
    super(props);
    this.state = {
      imageURL: ''
    }
  }
  getDog = () => {
      axios.get('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      this.setState({ imageURL: response.data.message });
    })
    .catch(error => {
      console.log(error);
    });
  }
  componentDidMount() {
    setInterval(this.getDog, 5000)
  }
  
  render() {
    let { imageURL } = this.state;
    return (
      <img src={imageURL} alt='dog' width='400' height='400'/>
    );
  }
  
}

export default Time;