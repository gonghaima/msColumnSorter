import update from 'immutability-helper';

function RootReducer(storeState = {}, action) {
  let finalStoreState;
  switch (action.type) {
  case 'EVT_DO_STH':
    finalStoreState = update(storeState, {foo: {$set: 'foo'}});
    break;
  case 'EVT_SHOW_NOTIFICATION':
    finalStoreState = update(storeState, {
      showNotification: {$set: action.showNotification},
      notificationMessage: {$set: action.notificationMessage}
    });
    break;
  case 'EVT_SHOW_MY_MODAL':
    finalStoreState = update(storeState, {showMyModal: {$set: action.showMyModal}});
    break;
  default:
    finalStoreState = storeState;
  }
  console.log('RootReducer.js: RootReducer called => ', 'finalStoreState=', finalStoreState, 'action=', action);
  return finalStoreState;
}
export default RootReducer;
