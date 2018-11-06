import React, { Component } from 'react';
import axios from 'axios';

class Github extends Component {

  state = {
    data: []
  }

  handleClickGithub = () => {
    axios.get('http://api.github.com/users')
    .then((response) => {
      console.log(response);
      this.setState({
        data: response.data,
      })
    })
  }

  render () {
    return (
      <div>
        <h1>Github members</h1>
        <div className='button-container'>
          <button className='button' onClick={this.handleClickGithub}>Get me Github members info</button>
        </div>
        {this.state.data.map((item) => {
          if (item.bio) {
            return (
            <div key={item.login}>
              <img src={item.avatar_url} alt="My Avatar" width="100px" border="2px solid black" />
              <p><strong>Name: </strong>{item.name}</p>
              <p><strong>Username: </strong>{item.login}</p>
              <p><strong>Bio: </strong>{item.bio}</p>
              <p><strong>Company: </strong>{item.company}</p>
              <p><strong>Repositories: </strong>{item.public_repos}</p>
              <p><strong>Blog: </strong>{item.blog}</p>
            </div> )
          } else {
            return (
              <div key={item.login}>
                <img src={item.avatar_url} alt="My Avatar" width="100px" border="2px solid black" />
                <p><strong>Username: </strong>{item.login}</p>
              </div>
            )
          }
        })}
      </div>
    )
  }

}

export default Github;