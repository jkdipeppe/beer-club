import React from "react";


const baseUrl = "http://localhost:3000";

class MemberContainer extends React.Component {
  state = {
    member: {}
  }
  componentDidMount(){
    fetch(`${baseUrl}/member`, {
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
        this.setState({ member: json })
      });
  }

  render(){
    return(
      <div>
        hi
      </div>
    )
  }
}

export default MemberContainer
