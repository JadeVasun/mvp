import React, { Component } from 'react';
import axios from 'axios';
import ThoughtList from './ThoughtList';


class App extends Component {
  constructor() {
    super();
    
    this.state = {
      userInput: '',
      userName: [],
      thoughtsInput: '',
      thoughtsInput: []
    };
}
  // fetchData() {
  //   axios.get('http://localhost:1337/api/user')
  //     .then((results) => {
  //       //should be userName.data bc that's what I used on the post
  //       this.setState({userName: results})
  //       console.log('this.state.userName:', this.state.userName)
  //       })
  //     .catch((data) => console.log (error))
  // }

  // handleUserNameInputChange (event) {
  //   this.setState({userInput: event.target.value})
  // }

  // handleUserNameSubmit (event) {
  // if (this.state.userInput.length > 0) {
  //     axios.post('http://localhost:1337/api/user', {userName: this.state.userInput})
  //     .then ((data) => {
  //       console.log(data, "post successful")
  //       //fetch here and get request here
  //     })
  //     .catch((err) => console.log('error: post failed'))
  //   }
  // }

  // handleUserNameSubmit (event) {
  //   this.setState({userInput: event.target.value})
  // }
  render() {
    return (
      <div>
        
      <form onSubmit = {(event) => this.handleUserNameSubmit (event)}>
        <label>
          Name:
        <input value = {this.state.userInput} onChange={(event) => this.handleUserNameInputChange(event)}/> 
        <button type="submit"> ADD USER </button>
        </label>
      </form>
      {/* <ThoughtList/>  */}
      </div>
    );
  }
}

export default App;