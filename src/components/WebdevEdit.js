import React, { Component } from 'react';
import apiService from '../lib/ApiService';

class WebdevEdit extends Component {

  state = {
    webdevs: [],
    isVisible: false,
    inputValue: '',
    title: this.props.title,
    text: this.props.text,
    image: this.props.image
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let { webdevs, title, text, image } = this.state;
    // webdevs.push({title: title, text: text, image: image});
    this.props.pressed()
    this.setState({
      webdevs: webdevs,
      title: title,
      text: text,
      image: image
    })
    // console.log(webdevs);
    apiService.editApi(this.props.id,
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
       <div>
         <form className="form-field" onSubmit={this.handleSubmit}>
          <input className="input-field" type="text" name="title" value={title} onChange={this.handleInput} />
          <input className="input-field" type="textarea" name="text" value={text} onChange={this.handleInput} />
          <input className="input-field" type="text" name="image" value={image} onChange={this.handleInput} />
          <input className="button" type="submit" value="Update" />
         </form>
       </div>
    )
  }
}

export default WebdevEdit;