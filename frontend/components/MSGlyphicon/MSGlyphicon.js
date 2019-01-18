// USAGE:
//   <MSGlyphicon glyph="users" className="fa-4x" />
//   Please note className is optional!
import React from 'react';

export default class MSGlyphicon extends React.Component {
  getClassName() {
    return this.props.className? this.props.className:'';
  }

  render() {
    return (
      <i className={`fa fa-${this.props.glyph} fa ${this.getClassName()}`} aria-hidden="true" />
    );
  }
}