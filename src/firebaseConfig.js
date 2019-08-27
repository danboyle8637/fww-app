import * as firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAHY3WBPdT26JVesJ0GFYTRhqOsQh_HDsU',
  authDomain: 'fit-womens-weekly.firebaseapp.com',
  databaseURL: 'https://fit-womens-weekly.firebaseio.com',
  projectId: 'fit-womens-weekly',
  storageBucket: 'fit-womens-weekly.appspot.com',
  messagingSenderId: '413346277257',
  appId: '1:413346277257:web:c13b9270283d0118'
}

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig)
    this.auth = firebase.auth()
  }

  signup(email, password) {
    return this.auth.createUserWithEmailAndPassword(email, password)
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  logout() {
    return this.auth.signOut()
  }
}
