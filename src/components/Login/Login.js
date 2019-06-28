import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { useAlert } from "react-alert";
import loginUser from "../../redux/actions/loginActions";
import display_message from "../../redux/actions/messageAction";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "mail23@mail.com",
      password: "password"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const { display_message, history } = this.props;
    display_message("Logging in ........");
    loginUser(this.state).then(status => {
      if (status) {
        display_message("Login succesfull");
        history.push("/");
      }
    });
  }
  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  render() {
    return (
      <div data-test="c-login">
        <div className="container">
          <div className="card login-card">
            <div className="card-header">
              <p data_temp_dwid="1"> Login </p>
            </div>
            <div className="card-body">
              <form className="form-v1" onSubmit={this.handleSubmit}>
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="email"
                    name="email"
                    required
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <label>Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    name="password"
                    required
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="pull-left">
                  <a href="resetpassword.html">Forgot password?</a>
                </div>
                <div className="pull-right">
                  <input
                    type="submit"
                    value="login"
                    className="button bg-teal hover-outline-blue"
                    placeholder="login"
                  />
                </div>
                <div className="clear-both" />
              </form>
            </div>
            <div className="card-footer">
              <a href="/signup">Not signed up yet?</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { message: state.message };
};
const mapDispatchToProps = dispatch => {
  return {
    display_message: message => dispatch(display_message(message))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
