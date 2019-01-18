require('babel-register')();
var jsdom = require('jsdom').jsdom;
const hook = require('css-modules-require-hook');
hook({
  // create clean and unified className which make it easiert to write test cases
  // because every test case is totally independent, it's impossible to have className
  // conflicts
  generateScopedName: '[name]_[local]'
});

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;