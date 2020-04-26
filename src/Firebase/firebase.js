import firebase from 'firebase/app'
require('firebase/auth')
import { API_KEY, AUTH_DOMAIN, DATABASE_URL, PROJECT_ID, STORAGE_BUCKET,MESSAGE_SENDING_ID, APP_ID, MEASUREMENT_ID} from 'react-native-dotenv'

var firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGE_SENDING_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase