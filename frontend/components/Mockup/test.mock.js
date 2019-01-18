export function POST(url, data, headers) {
  console.log('test.mock.js: POST called', 'url=', url, 'data=', data);
  return new Promise(function(resolve, reject) {
    if(data.username === 'user1' || data.username === 'user2') {
      resolve({
        username: null,
        password: null,
        token: 'abcd123456'
      });
    } else {
      reject({
        message: url + ': failed'
      });
    }
  });
}

export function DELETE(url, data, headers) {
  return new Promise(function(resolve, reject) {
    resolve({
      status: 'success'
    });
    reject({
      message: url + ': failed'
    });
  });
}