import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super();

    this.state = {
      userName: "",
      hometown: ""
    }
  }

  handleInputChange(key, event) {
    this.setState({
      [key]: event.target.value,
    });
  }

    handleSubmit(){
     this.props.store.dispatch({type: 'ADD_USER', payload: this.state})
   }


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          Username: <input type="text" value={this.state.userName} onChange={this.handleInputChange.bind(this, 'userName')}/> <br/>
          Hometown: <input type="text" value={this.state.hometown} onChange={this.handleInputChange.bind(this, 'hometown')}/> <br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default UserInput;
