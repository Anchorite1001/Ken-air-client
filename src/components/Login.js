import React, {Component} from 'react';
import axios from 'axios'

const SERVER_URL = 'http://localhost:3000/users.json'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      users:[]
    }
    this.saveUser = this.saveUser.bind(this);

    const fetchUsers = () => {
      axios.get(SERVER_URL).then((response) => {
        console.log(response.data)
        this.setState({secrets: response.data});
        setTimeout(fetchUsers,4000)
      })
    }

    fetchUsers();
  }

  saveUser(content) {
    axios.post(SERVER_URL, {content: content}).then((response) => {
      this.setState({users: [...this.state.secrets, response.data]})
    })
  }


  render() {
    console.log(this.props.name)
    return(
      <div>
        <h1>Login</h1>
        <label>First Name:</label>
        <input></input>
        <button onSubmit={this.saveSecret}>Login</button>
        <button>Logout</button>
      </div>
    )
  };
}

export default Login;
