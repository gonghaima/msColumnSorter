import React from 'react';
import MSGlyphicon from 'MSGlyphicon/MSGlyphicon.js';

import st from './LinkWithIcon.css'; //Optional

export default class LinkWithIcon extends React.Component {
  onClick(e) {
    e.preventDefault();
    if(this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    return (
      <a className={`${st.link} ${this.props.className? this.props.className:''}`}
         onClick={ (e) => this.onClick(e) } >
        { this.props.glyph? <MSGlyphicon glyph={this.props.glyph} className={`${this.props.iconClassName? this.props.iconClassName:''}`} />: null}
        {
          this.props.description? (<span>{this.props.description}</span>): null
        }
      </a>
    );
  }
}