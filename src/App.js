import React, { Component } from 'react';
import './App.css';
import UserList from './components/UserList';
import LoginForm from './components/LoginForm'
import { Route, Link } from "react-router-dom";
import MyProfile from './components/MyProfile';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
      userID: null,
      login: (id)=> {
        this.setState({ loggedIn: true, userID: id})
      }
    }
  }

  render() {
    return (
      <div className="App">

      <div>
        <ul className="navbar">
          <li> <Link to="/users">Users</Link> </li>
          <li>
            {
              this.state.loggedIn ? <Link to='/profile'>My Profile</Link>
                                  : <Link to="/login">Login</Link>
            }
          </li>
          <hr />
        </ul>
        <Route path="/login" component={()=> <LoginForm root= {this.state} />} />
        <Route path="/users" component={UserList} />
        <Route path="/profile" component={() => <MyProfile root={this.state}/>} />
      </div>
      </div>
    );
  }
}

export default App;
