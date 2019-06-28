import React, { Component } from "react";
import displayMessage from "../../redux/actions/messageAction";
import { connect } from "react-redux";
import { withAlert } from "react-alert";

class ShowAlert extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.message) {
      this.props.alert.success(this.props.message);
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.message !== prevProps.message) {
      this.props.alert.success(this.props.message);
    }
  }

  render() {
    return <div />;
  }
}

const mapStateToProps = state => ({
  message: state.message
});
const mapDispatchToProps = (state, ownProps) => {
  return {
    displayMessage
  };
};

export default connect(
  mapStateToProps,
  null
)(withAlert()(ShowAlert));
