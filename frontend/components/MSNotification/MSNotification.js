import React from 'react';
import { connect } from 'react-redux';
import { Notification } from 'react-notification';

export class MSNotification extends React.Component {
  constructor(props) {
    super(props);
  }

  getNotificationMessage() {
    console.log('MSNotification.js: MSNotification.getNotificationMessage called => ', 'this.props.notificationMessage=', this.props.notificationMessage);
    return this.props.notificationMessage? this.props.notificationMessage:'';
  }

  render() {
    return (
      <Notification
        isActive={this.props.showNotification}
        message={this.getNotificationMessage()}
        action="Dismiss"
        barStyle={{
          bottom: 'auto',
          top: '16px',
          left: 'auto',
          zIndex: 99999,
          right: '-100%'
        }}
        activeBarStyle={{
          right: '16px'
        }}
        onDismiss={this.props.close}
        dismissAfter={3000}
        onClick={this.props.close}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return ({
    close: function() {
      return dispatch({
        type: 'EVT_SHOW_NOTIFICATION',
        showNotification: false
      });
    }
  });
}

export default connect(
  function (storeState) {
    // store state to props
    return {
      showNotification: storeState.app.showNotification,
      notificationMessage: storeState.app.notificationMessage
    };
  },
  mapDispatchToProps
)(MSNotification);