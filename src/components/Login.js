import React, {Component} from 'react';
import axios from 'axios'

const SERVER_URL = 'http://localhost:3000/users.json';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }

    //Polling for "live" undating:
    const fetchUsers = () => {
      axios.get(SERVER_URL).then((response) => {
        console.log(response.data)
        this.setState({users: response.data});
        setTimeout(fetchUsers,40000);//recursive alternative to setINterval
      });
    }

    fetchUsers();
  }

  saveUser(content){
    axios.post(SERVER_URL, {content: content}).then((response) => {
      this.setState({users: [...this.state.users, response.data]})
    })
  }



  render(){
    return(
      <div>
        <UserForm onSubmit={ this.saveUser }/>

      </div>
    )
  }
}

//use class for state as in : this.setState

//track what the user types (state)
//detect whent he formi submitted and do something with the state??
class UserForm extends Component {
  constructor() {
    super();
    this.state = { content: '' };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(event) {
    this.setState({content: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.content);
    this.setState({content: ''}); //reset
  }

  render() {
    return(
      <form onSubmit={ this._handleSubmit }>
        <input onChange={ this._handleChange } value={ this.state.content }/>
        <input type="submit" value="Login"/>
      </form>
    )
  }
}

//functional component: quick and dirty if you done need state
//
const SecretsList = (props) => {
  return(
    <div>
      { props.secrets.map( (s) => <p key={ s.id }>{s.content}</p> ) }
    </div>
  )
};

export default Login;
