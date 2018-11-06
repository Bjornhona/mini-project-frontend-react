import React, { Component } from 'react';
import apiService from '../lib/ApiService';

class WebdevAdd extends Component {

  state = {
    webdevs: [],
    isVisibleAdd: false,
    inputValue: '',
    title: '',
    text: '',
    image: ''
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let { webdevs, title, text, image } = this.state;
    webdevs.push({title: title, text: text, image: image});
    this.props.pressed()
    this.setState({
      webdevs: webdevs,
      title: title,
      text: text,
      image: image
    })
    // console.log(webdevs);
    apiService.addApi(
      {
        title: title,
        text: text,
        image: image
      }
    )
      .then(() => {
        this.props.update();
      })
      .catch((error) => {
        console.log('error handleAdd', error)
      })
  }

  render () {
    let { title, text, image } = this.state;
    return (
       <div className="container">
         <form className="form-field" onSubmit={this.handleSubmit}>
          <input className="input-field" type="text" name="title" value={title} onChange={this.handleInput} placeholder="Title" />
          <input className="input-field" type="textarea" name="text" value={text} onChange={this.handleInput} placeholder="Text" />
          <input className="input-field" type="text" name="image" value={image} onChange={this.handleInput} placeholder="Image URL" />
          <input className="button" type="submit" value="Add" />
         </form>
       </div>
    )
  }
}

export default WebdevAdd;