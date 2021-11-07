import firebase from 'firebase/app'

export const appName = 'advreact-702e3'

const firebaseConfig = {
  apiKey: 'AIzaSyC0v67BzJQoluPQ908vMJhCEw-e1YyuIms',
  authDomain: `${appName}.firebaseapp.com`,
  databaseURL: `https://${appName}.firebaseio.com`,
  projectId: appName,
  storageBucket: `${appName}.appspot.com`,
  messagingSenderId: '320235470761',
  appId: '1:320235470761:web:6a7ec6838663a15f3b0eb8'
}

firebase.initializeApp(firebaseConfig)
