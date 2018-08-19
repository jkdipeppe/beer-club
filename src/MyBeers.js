import React from 'react'
import AddBeer from './AddBeer'
import { Grid, Form, Checkbox, Button, Input } from 'semantic-ui-react'

const baseUrl = "http://localhost:3000";

class MyBeers extends React.Component {

  state = {
    beers: {},
  }

  componentDidMount() {
    fetch(`${baseUrl}/beers`, {
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }),
      withCredentials: true
    })
      .then(res => {
        // debugger
        res.json()
      })
      .then(json => {
        // debugger
        this.setState({
          beers: json
        })
      });
  }

  render(){
    console.log('all beers', this.state.beers)
    return(
      <div>
        My beers
        <AddBeer />
      </div>
    )
  }
}

export default MyBeers
