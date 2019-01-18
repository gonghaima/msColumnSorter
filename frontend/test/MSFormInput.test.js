import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import rootReducer from 'Global/RootReducer.js';
import {
  validatorRequired,
  validatorAlphaNumeric
} from 'CommonUtil/CommonUtil.js';
import { LocalForm } from 'react-redux-form';
import MSFormInput from 'MSFormInput/MSFormInput';

const store = createStore(
  combineReducers({
    app:rootReducer,
    routing: routerReducer
  }),
  {}, // initial state
  applyMiddleware(thunk)
);

describe('Test MSFormInput', function() {
  before(function() {
  });

  it('MSFormInput is rendered properly', function() {
    function save(values) {
      console.log('.js: Function.save called => ', 'values=', values);
    }
    var formValidators = {
      bookmarkName: { required: validatorRequired, alphaNumeric: validatorAlphaNumeric }
    };
    const input = mount(
      <Provider store={store}>
        <LocalForm model="user"
                   validators={formValidators}
                   onSubmit={save}
                   className="form-horizontal">
          <MSFormInput
            labe labelWidth={4}
            messages={{required: 'Required', alphaNumeric:'Please input alphanumberica characters'}}
            model=".bookmarkName"
            autoFocus
          />
        </LocalForm>
      </Provider>
    );
    expect(input.find('input')).to.have.length(1);
  });
});
