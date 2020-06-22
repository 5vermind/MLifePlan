import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  //파이어베이스 웹앱 프로젝트 추가하고 설정인가 에서 가져오기
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const firebaseAuth = firebase.auth(firebaseApp)

const firestore = firebase.firestore(firebaseApp)

export { firebase, firebaseApp, firebaseAuth, firestore, firebaseConfig }
