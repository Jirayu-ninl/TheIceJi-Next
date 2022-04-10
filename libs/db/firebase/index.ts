import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

class Firebase {
  constructor(clientConfig) {
    this.clientCredentials = clientConfig
  }

  start = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp(this.clientCredentials)
    }
  }
  firebase = firebase
}

export default Firebase