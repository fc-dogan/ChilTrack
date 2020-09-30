import React from 'react'
import { connect } from 'react-redux'
import { signUp } from '../actions/authActions'

class SignUp extends React.Component {
  state = {
    email:'',
    password:'',
    firstName: '',
    lastName: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id] : event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.signUp(this.state);
  }

  render() {
    return (
      <div className="container">
      <form className="white" onSubmit={this.handleSubmit}>
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id='email' onChange={this.handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id='password' onChange={this.handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id='firstName' onChange={this.handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id='lastName' onChange={this.handleChange} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Sign up</button>
          <div className="center red-text">

          </div>
        </div>
      </form>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)