import React from "react";
import { Form, Button, Grid, Icon } from "semantic-ui-react"
import { Link, Redirect } from "react-router-dom";


const baseUrl = "http://localhost:3000";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    invalid: false,
    error: false
  };

  login = e => {
    e.preventDefault();
    fetch(`${baseUrl}/login`, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(res =>
        res.json())
      .then(json => {
        if(json.token) {
          localStorage.setItem("token", json.token);
          this.props.handleLogIn()
        } else {
          this.setState({
            invalid: true,
            error: true
          })
        }
        this.props.handleRoute()
      })
  };

  render() {
    console.log(this.state)

    return (
      <div>
        <Grid>
          <Form centered style={{margin:'0 auto', width:'30em', padding:'5em'}}>
            <div
              className={
                this.state.error
                  ? "ui fluid left icon input error"
                  : "ui fluid left icon input"
              }
            >
              <input
                name="username"
                value={this.state.username}
                onChange={e => this.setState({ username: e.target.value })}
                placeholder="username"
              />
              <Icon name="user icon" />
            </div>
            <br />
            <div
              className={
                this.state.error
                  ? "ui fluid left icon input error"
                  : "ui fluid left icon input"
              }
            >
              <input
                name="password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
                placeholder="password"
              />
            <Icon name="lock icon" />
            </div>
          <Button style={{backgroundColor:'gray', padding:'10px', margin:'10px', width:'50%'}} onClick={this.login.bind(this)}>Login</Button>
          </Form>
        </Grid>
        <div>
          {
            this.state.invalid ?
            <p style={{textColor:'red'}}>Incorrect Username or Password</p>
            :
            null
          }
        </div>
      </div>
    )
  }
}

export default Login;
