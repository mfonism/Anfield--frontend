import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDiW7iRvKQ-Eg5s1LKqo5EgCE7vroL-CNw',
  authDomain: 'ynwa-e214d.firebaseapp.com',
  databaseURL: 'https://ynwa-e214d.firebaseio.com',
  projectId: 'ynwa-e214d',
  storageBucket: 'ynwa-e214d.appspot.com',
  messagingSenderId: '849378998821',
  appId: '1:849378998821:web:c56f70ea338bb15fd1ddcc',
  measurementId: 'G-FLSN2XCLGM',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
