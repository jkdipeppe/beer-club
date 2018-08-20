import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import { connect } from 'react-redux';
import MemberContainer from './MemberContainer';
import AllBeers from './AllBeers';
import MyBeers from './MyBeers';
import CreateMember from './CreateMember';
import NavBar from './NavBar';
import Login from "./Login";
import './App.css';


class App extends Component {
  constructor(){
      super();

      this.state = {
        loggedIn: false,
        newAccount: false,
        currentAccount: {}
      }
    }

    componentDidMount() {
      localStorage.getItem("token") ? this.setState({loggedIn: true}) : this.setState({loggedIn: false})
    }

    handleLogIn = () => {
      this.setState({
        loggedIn: true
      })
    }

    handleLogOut = () => {
      this.setState({
        loggedIn: false
      })
      localStorage.removeItem("token")
    }

    handleRoute = () => {

    }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <p>Put anything Here</p>
          </header>
          <NavBar loggedIn={this.state.loggedIn} handleLogOut={()=> this.handleLogOut()}/>
          {this.state.loggedIn ? (
            <div>
              <Redirect to='/MemberPage' />
              <Route path='/MemberPage' render={() => <MemberContainer />} />
              <Route path='/AllBeers' render={() => <AllBeers />} />
              <Route path='/MyBeers' render={() => <MyBeers />} />
            </div>
          ) : (
            <div>
              <Route path='/login' render={(props) => <Login loggedIn={this.state.loggedIn} handleRoute={this.handleRoute} handleLogIn={this.handleLogIn}/>} />
              <Route path='/CreateMember' render={(props) => <CreateMember loggedIn={this.state.loggedIn} handleLogIn={this.handleLogIn}/>} />
            </div>
          )}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items //giving our component access to state.items through props.items (the key)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCount: () => dispatch({type: 'INCREASE_COUNT'}),
    decreaseCount: () => dispatch({type: 'DECREASE_COUNT'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
