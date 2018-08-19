import React from 'react'
import { Grid, Form, Checkbox, Button, Input } from 'semantic-ui-react'

const baseUrl = "http://localhost:3000";

class AddBeer extends React.Component {
  state = {
    beerBrand: '',
    beerName: '',
    abv: '',
    type: '',
    meetingMonth: '',
    meetingYear: ''
  }

  render(){
    return(
      <Grid>
        <Grid.Column width={6} />
        <Grid.Column width={4}>
          <Form>
            <input
              name="beerBrand"
              value={this.state.beerBrand}
              onChange={e => this.setState({ beerBrand: e.target.value })}
              placeholder="Brewer (ex. Blue Moon)"
            />
            <input
              name="beerName"
              value={this.state.beerName}
              onChange={e => this.setState({ beerName: e.target.value })}
              placeholder="Name (ex. Harvest Wheat)"
            />
            <input
              name="abv"
              value={this.state.abv}
              onChange={e => this.setState({ abv: e.target.value })}
              placeholder="ABV (ex. 6.9%)"
            />
            <input
              name="type"
              value={this.state.type}
              onChange={e => this.setState({ type: e.target.value })}
              placeholder="Type of Brew (ex. wheat)"
            />
            <input
              name="meetingMonth"
              value={this.state.meetingMonth}
              onChange={e => this.setState({ meetingMonth: e.target.value })}
              placeholder="Current Month (ex. January)"
            />
            <input
              name="meetingYear"
              value={this.state.meetingYear}
              onChange={e => this.setState({ meetingYear: e.target.value })}
              placeholder="Current Year (ex. 2018)"
            />
          </Form>
        </Grid.Column>
        <Grid.Column width={6} />
      </Grid>
    )
  }
}

export default AddBeer
