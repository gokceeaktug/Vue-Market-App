import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase  from 'firebase'
import { firestorePlugin } from 'vuefire'
import VueFire from 'vuefire';
import 'firebase/firestore';




Vue.config.productionTip = false
Vue.use(firestorePlugin)
var config = {
  apiKey: "AIzaSyAUL9zgM4Pv_j8KOFq3D3RBLOJC4b1wHAI",
  authDomain: "vueapp-e01b6.firebaseapp.com",
  projectId: "vueapp-e01b6",
  storageBucket: "vueapp-e01b6.appspot.com",
  messagingSenderId: "17012325854",
  appId: "1:17012325854:web:98fae7a106fad33de5714f",
  measurementId: "G-K3YR9REL8Y"
};

firebase.initializeApp(config);
export const db=firebase.firestore()


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
