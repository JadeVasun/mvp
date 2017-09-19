import React, { Component } from 'react';
import axios from 'axios';
// import ThoughtList from './ThoughtList';
// import Dropdown from './Dropdown';


class App extends Component {
  constructor() {
    super();
    
    this.state = {
      userInput: '',
      userName: [],
      thoughtsInput: '',
      thoughtsInput: []
    };
    this.handleUserNameSubmit = this.handleUserNameSubmit.bind(this);
    this.handleUserNameInputChange = this.handleUserNameInputChange.bind(this);
}
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    console.log('fetch so hard');
    axios.get('http://localhost:3000/api/user')
      .then((results) => {
        //should be userName.data bc that's what I used on the post
        this.setState({userName: results.data})
        console.log('this.state.userName:', this.state.userName)
        })
      .catch((data) => console.log (error))
  }

  handleUserNameInputChange (event) {
    // console.log('working')
    // console.log(event.target.value)
    event.preventDefault();
    this.setState({userInput: event.target.value})
  }

  handleUserNameSubmit (event) {
    console.log(this.state.userInput)
  if (this.state.userInput.length > 0) {
      axios.post('http://localhost:3000/api/user', {user: this.state.userInput})
      .then ((data) => {
        console.log(data, "post successful")
        //fetch here and get request here
      })
      .catch((err) => console.log('error: post failed'))
    }
  }

  render() {
    return (
      <div>
        <label>
          Name:
        <input value = {this.state.userInput} onChange={(event) => this.handleUserNameInputChange(event)}/> 
        <button onClick = {(event) => this.handleUserNameSubmit (event)}> ADD USER </button>
        </label>

     
      </div>
    );
  }
}

export default App;