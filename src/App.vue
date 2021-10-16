<template>
  <div id="app">
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      Vue App
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
   <div class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item">  <router-link to="/" class="navbar-item">Anasayfa</router-link> |
          <router-link to="/about" class="navbar-item">Hakkında</router-link>
        </div>
      </div>

      <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped" v-if="!isAuthenticated">
              <p class="control"><router-link to="/signup" class=" button is-primary">Kaydol</router-link></p>
              <p class="control"><router-link to="/login" class=" button info">Giriş Yap</router-link></p>
            </div>
            <div class="field" v-else>
            <p class="control">
            <button @click="showCategoryForm=!showCategoryForm" class="button is-primary">Kategori ekle</button></p>
            <p class="control">
            <button @click="logout" class="button is-danger">Çıkış Yap</button></p></div>

          </div>
      </div>



  </div>
</nav>
<div class="modal" :class="{'is-active': showCategoryForm}">
  <div class="modal-background"></div>
  <div class="modal-content">
   <form action="" @submit.prevent="addCategory">
    <div class="field">
        <input type="text" class="input" v-model="title">
    </div>

    <div class="field">
        <button class="button is-success">Ekle</button>  
    </div>
    </form>
  </div>
  <button class="modal-close is-large" aria-label="close" @click="showCategoryForm=!showCategoryForm"></button>
</div>
    <router-view/>
  </div>
</template>
<script>
import firebase from 'firebase'
import {db} from './main.js'



export default {
  data () {
    return{
      isAuthenticated:false,
      showCategoryForm:false,
      title:''
    }
  },
     created (){
        firebase.auth().onAuthStateChanged(user=>{
          if(user) {
                this.isAuthenticated=true
                  
            }
        })
    },
    methods:{
      addCategory() {
        const category={
          title:this.title
        }
        db.collections('categories').add(category)
        this.showCategoryForm=false
        this.title=''

      },
      logout(){
        firebase.auth().signOut()
        .then(()=>{
          this.isAuthenticated=false
          this.$router.push('/login')
        })
      }
    }
}
</script>



<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma-rtl.min.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

#nav {
  padding: 30px;
 
}

#nav a {
  font-weight: bold;
  color: #0a7ff5;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
