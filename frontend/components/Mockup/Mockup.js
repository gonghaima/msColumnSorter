export function fakedFetch(url, method, data, optionalHeaders) {
  console.log('Mockup.js: fakedFetch called', 'url=', url, 'method=', method, 'data=', data);
  // name of mockup js file should follow existing examples
  let mockupMatrix = [
    {regex: /api\/test$/, file:'./test.mock.js'}
  ];

  for(let row of mockupMatrix) {
    if(row.regex.test(url)) {
      return require(row.file)[method](url, data, optionalHeaders);
    }
  }
  // unknown API
  return new Promise();
}