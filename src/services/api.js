import * as firebase from './firebase';

const initializeFB = () => firebase.initializeFB();

const getMessages = (updateFn) => {
  firebase.setListener('message', updateFn);
};

const postMessage = (message) => {
  if ((message)) {
    firebase.pushItem('message', {
      incoming: false,
      message,
    });
  }
};

const api = {
  initializeFB,
  getMessages,
  postMessage,
};

export default api;
