import * as firebase from 'firebase';

export const initializeFB = () => firebase.initializeApp({
  apiKey: 'AIzaSyB8sHabOnqrKXbdiv8e_K8bhER5hD2c5rM',
  authDomain: 'whatsappclone-6c578.firebaseapp.com',
  databaseURL: 'https://whatsappclone-6c578.firebaseio.com',
  projectId: 'whatsappclone-6c578',
  storageBucket: 'whatsappclone-6c578.appspot.com',
  messagingSenderId: '789186481916',
});

export const setListener = (endpoint, updateFn) => {
  firebase.database().ref(endpoint).on('value', updateFn);
  return () => firebase.database().ref(endpoint).off();
};

export const pushItem = (endpoint, item) => {
  firebase.database().ref(endpoint).push(item);
};

// export default { initializeFB, setListeners };
