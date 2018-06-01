import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionTest } from '../flow/actions';

class Example extends Component {
  componentDidMount() {
    debugger;
    this.props.actionTest();
  }

  render() {
    return (
      <div>
        <h1>This is a default header</h1>
        <p>Something goes in here is page body</p>
      </div>
    );
  }
}

const mapStateToProps = ({ global }) => ({});
const mapDispatchToProps = {
  actionTest,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
