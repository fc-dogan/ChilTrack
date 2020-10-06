import React from 'react'
import { connect } from 'react-redux'
import * as a from './../actions';
import { Redirect } from 'react-router-dom'

class SignIn extends React.Component {
  state = {
    email:'',
    password:''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id] : event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.signIn(this.state)
  }

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/dashboard' /> 
    return (
      <div className="container">
      <form className="white" onSubmit={this.handleSubmit}>
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id='email' onChange={this.handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id='password' onChange={this.handleChange} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
          <div className="center red-text">
          { authError ? <p>{authError}</p> : null }
          </div>
        </div>
      </form>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(a.signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)