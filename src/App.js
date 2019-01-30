import React, { Component } from "react";
import { connect } from "react-redux";
import { inc, dec } from "./actions/actions";
import "./App.css";

class App extends Component {
  render() {
    const { user, count, inc, dec } = this.props;
    return (
      <div className="App">
        <p>Привет, {user.name}!</p>
        <div className="result">{count}</div>
        <div className="wrap-button">
          <button onClick={inc} className="btn btn-primary">
            -
          </button>
          <button onClick={dec} className="btn btn-success">
            +
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = store => {
  return {
    user: store.user,
    count: store.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    inc: () => dispatch(inc()),
    dec: () => dispatch(dec())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
