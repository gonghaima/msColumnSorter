import React from 'react';
import { connect } from 'react-redux';
import { LocalForm } from 'react-redux-form';
import MSFormInput from 'MSFormInput/MSFormInput.js';
import {
  getRoutePath,
  postJSON
} from 'CommonUtil/CommonUtil.js';
import {
  Button,
  Modal
} from 'react-bootstrap';

import {
  validatorRequired,
  validatorAlphaNumeric
} from 'CommonUtil/CommonUtil.js';

import st from './MyModal.css';

export class MyModal extends React.Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.save = this.save.bind(this);
    this.formValidators = {
      username: { required: validatorRequired, alphaNumeric: validatorAlphaNumeric },
      password: { required: validatorRequired }
    };
    this.state = {
      username: '',
      password: '',
      resultMessage: null
    };
  }

  close() {
    this.props.close();
  }

  save(values) {
    let self = this;
    console.log('MyModal.js: MyModal.save called => ', 'values=', values);
    this.props.loginNow(values).then(function(token) {
      console.log('MyModal.js: MyModal.save called => ', 'token=', token);
      if(!token) {
        self.setState({
          resultMessage: 'Token is null. User name should be either `user1` or `user2`!'
        });
      } else {
        self.props.showNotificationMessage(`Operation is successful! Got token: ${token}`);
        self.close();
      }
    });
  }

  render() {
    return (
      <Modal show={this.props.showMyModal} onHide={ this.close } className={st.modal}>
        <LocalForm
          model="user"
          validators={this.formValidators}
          onSubmit={this.save}
          className="form-horizontal"
        >
          <Modal.Header closeButton className={st.header}>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <MSFormInput
              type="text"
              labelWidth={5}
              messages={{required: 'Required', alphaNumeric: 'User name should be alphanumeric'}}
              model=".username"
              autoFocus>
              User name *
            </MSFormInput>
            <MSFormInput
              type="password"
              labelWidth={5}
              messages={{required: 'Required'}}
              model=".password">
              Password *
            </MSFormInput>
            { this.state.resultMessage? <div className={st.error}>{this.state.resultMessage}</div>:null }
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">OK</Button>
            <Button onClick={ this.close }>Cancel</Button>
          </Modal.Footer>
        </LocalForm>
      </Modal>
    );
  }
}

// latest way to use react-router 2.x
MyModal.contextTypes = {
    // @see https://github.com/grommet/grommet/issues/441
  router: React.PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return({
    loginNow: function(values) {
      console.log('MyModal.js: ?.loginNow called => ', 'values=', values);
      return dispatch(function(/* dispatch */) {
        return postJSON(getRoutePath('api/test'), {
          username: values.username,
          password: values.password
        }).then(function(resp) {
          return (resp && resp.token)? resp.token:null;
        }, function(err) {
          return null;
        });
      });
    },
    showNotificationMessage: function(msg) {
      return dispatch({
        type: 'EVT_SHOW_NOTIFICATION',
        showNotification: true,
        notificationMessage: msg
      });
    },
    close: function() {
      return dispatch({
        type: 'EVT_SHOW_MY_MODAL',
        showMyModal: false
      });
    }
  });
}
export default connect(
  function (storeState) {
    // store state to props
    return {
      showMyModal: storeState.app.showMyModal
    };
  },
  mapDispatchToProps
)(MyModal);