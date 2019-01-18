import 'whatwg-fetch';

let Mockup = null;
if('production' !== process.env.NODE_ENV) {
  Mockup=require('Mockup/Mockup.js');
}

// flatObject({a:'a1', b:{b1:'b1'}, c:{c1: 'c1'},
//            {b: 1 } // 1 means ignore field 'b'
//            {c: 2 } // 2 means spread field 'c'
//           )
// got: {a: 'a1', c:{c1: 'c1'}}
function flatObject(obj, optionalIgnoreDict) {
  let allKeys = Object.keys(obj);
  let newObj = {};
  for(let key of allKeys) {
    if(!optionalIgnoreDict || !optionalIgnoreDict[key]) {
      // copy element
      newObj[key] = obj[key];
    } else if(optionalIgnoreDict[key] === 1){
      // just ignore
      // do nothing
    } else if(optionalIgnoreDict[key] === 2){
      // spread obj[key] into newObj
      for(let k of Object.keys(obj[key])) {
        newObj[k] = obj[key][k];
      }
    }
  }
  return newObj;
}


function isIE() {
  // @see https://github.com/gagle/js-ie-version/blob/master/lib/ie-version.js
  //"!win.ActiveXObject" is evaluated to true in IE11
  return window.ActiveXObject !== undefined;
}

function getRoutePath(p) {
  return ('production' !== process.env.NODE_ENV? '/':'/') + (p? p:'');
}

// {{ RESTful API
function postJSON (url, data, optionalHeaders) {
  // return promise
  if('production' !== process.env.NODE_ENV) {
    return Mockup.fakedFetch(url, 'POST', data, optionalHeaders);
  }

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...optionalHeaders
    },
    body: JSON.stringify(data)
  }).then(function(response) {
    return response.json();
  });
}

function getJSON(url, optionalHeaders) {
  if(/\?/.test(url)) {
    // work around ie cache issue
    url += '&tm=' + new Date().getTime();
  }
  if('production' !== process.env.NODE_ENV) {
    return Mockup.fakedFetch(url, 'GET', {}, optionalHeaders);
  }
  // return promise
  return fetch(url, {
    method: 'GET',
    headers: {'Content-Type': 'application/json', ...optionalHeaders}
  }).then(function(response) {
    return response.json();
  });
}

function deleteJSON(url, optionalHeaders) {
  if('production' !== process.env.NODE_ENV) {
    return Mockup.fakedFetch(url, 'DELETE', {}, optionalHeaders);
  }

  // return promise
  return fetch(url, {
    method: 'DELETE',
    headers: {...optionalHeaders}
  }).then(function(response) {
    return response.json();
  });
}
// }}

function trim(s) {
  return s.replace(/^[\s]+|[\s]+$/g, '');
}

function validatorRequired(val) {
  console.log('CommonUtil.js: validatorRequired called => ', 'val=', val);
  return val && val.length > 0;
}

function validatorAlphaNumeric(val) {
  console.log('CommonUtil.js: validatorAlphaNumeric called => ', 'val=', val);
  return /^[a-zA-Z0-9]+$/.test(val);
}

function isEmpty(value) {
  return value === undefined || value === null;
}

export {
  flatObject,
  isEmpty,
  isIE,
  getRoutePath,
  postJSON,
  getJSON,
  deleteJSON,
  trim,
  validatorRequired,
  validatorAlphaNumeric
};
