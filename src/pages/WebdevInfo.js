import React, { Component } from 'react';
import apiService from '../lib/ApiService';
import WebdevAdd from '../components/WebdevAdd';
import WebdevEdit from '../components/WebdevEdit';

class WebdevInfo extends Component {

  state = {
    webdevs: [],
    inputValue: '',
    isVisible: true,
    isVisibleAdd: true
  }

  componentDidMount () {
    this.update();
  }

  update = () => {
    apiService.getApi()
    .then((result) => {
      console.log(result);
      this.setState({
        webdevs: result
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  handleClickCreateNew = () => {
    apiService.addApi({      // Här överför vi objektet
      title: 'Xiomi',
      text: 'Mi A2',
      image: 'gdalh'
    })
    .then((result) => {       // Om allt har överförts väl och jag har fått ett svar
      console.log(result);     // Jag har lyckats infoga telefonen, men jag har ännu inte renderat den
      this.update();          // När det har laddats färdigt, så ändrar vi staten så att sidan laddas om och renderas på nytt
    })
    .catch((error) => {
      console.log(error)
    })
  }

  handleClickDelete = (id) => {
    apiService.deleteApi(id)
    .then(() => {
      this.update();
    })
  }

  handleVisibilityAdd = () => {
    const {isVisibleAdd} = this.state
    this.setState({
      isVisibleAdd: !isVisibleAdd
    })
  }

  handleVisibility = () => {
    const {isVisible} = this.state
    this.setState({
      isVisible: !isVisible
    })
  }

  render () {
    const { webdevs, isVisible, isVisibleAdd } = this.state;
    return (
      <div>
        <h1>Facts about Web Developers</h1>
        {isVisibleAdd ? <button className="button" onClick={this.handleVisibilityAdd}>Add Webdev Fact</button> : <WebdevAdd webdevs={webdevs} isVisibleAdd={isVisibleAdd} pressed={this.handleVisibilityAdd} update={()=>{this.update()}} />}
        {webdevs.map((webdev) => {
          return <div className="container" key={webdev._id}>
            <img src={webdev.image} width="100px" alt="black-icon" />
            <p><strong>{webdev.title}</strong></p>
            <p>{webdev.text}</p>
            <button className="button" onClick={() => {this.handleClickDelete(webdev._id)}}>Delete</button>
            {isVisible ? <button className="button" onClick={this.handleVisibility}>Edit</button> : <WebdevEdit id={webdev._id} title={webdev.title} text={webdev.text} image={webdev.image} webdevs={webdevs} isVisible={isVisible} pressed={this.handleVisibility} update={()=>{this.update()}} />}
          </div>
        })}
      </div>
    )
  }

}

export default WebdevInfo;