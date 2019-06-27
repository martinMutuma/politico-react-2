import React, { Component } from "react";
import "@babel/polyfill";
import { connect } from "react-redux";
import { withAlert } from "react-alert";

export class ShowAlertComponent extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const { message, alert } = this.props;
    if (message) {
      alert.success(message);
    }
  }
  componentDidUpdate(prevProps) {
    const { message, alert } = this.props;

    if (message !== prevProps.message) {
      alert.success(message);
    }
  }

  render() {
    return <div data-test="c-alert" />;
  }
}

const mapStateToProps = state => ({
  message: state.message
});
export default connect(
  mapStateToProps,
  null
)(withAlert()(ShowAlertComponent));
