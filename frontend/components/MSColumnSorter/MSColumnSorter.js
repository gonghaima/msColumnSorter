import React from 'react';
import { connect } from 'react-redux';
// Optional
import st from './MSColumnSorter.css';

export class MSColumnSorter extends React.Component {
  componentDidMount() {}

  constructor(props) {
    super(props);
    this.state = {};
    this.clickMe = this.clickMe.bind(this);
  }

  clickMe() {
    console.log('clickMe() called');
  }

  render() {
    return (
      <div>
        <h1>hello</h1>
        <button onClick={this.clickMe}>Click Me</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    callDistpach: () => {
      dispatch({
        type: 'EVT_SORT_COLUMN',
        date: true
      });
    }
  };
}
export default connect(
  function(storeState) {
    // store state to props
    return {};
  },
  mapDispatchToProps
)(MSColumnSorter);
