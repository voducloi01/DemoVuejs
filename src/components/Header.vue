<template>
    <nav   class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">          

          <div class="topnav" style="display: flex;">
            <router-link class="active" to="/search">Search</router-link>
            <router-link class="active" to="/">Product</router-link>            
            <router-link class="active" to="/cart" >Cart</router-link>
            <router-link class="active" v-if="storeLogin.isShowLogout" to="/login" > Login </router-link>
            <button class="custom_btn" v-else @click="storeLogin.isShowLogout = true"><router-link class="active" to="/login" >Đăng xuất!</router-link> </button>
          </div>
           <Search />
        </div>

      </nav>

  </template>
  
  <script>
import Search from './Search.vue';
import {useLogin} from '../store/useLogin'
  export default {
    name: "BootsrapExample",
    props : ['show'] , 
    components: { Search } , 
    setup () {
        const storeLogin = useLogin() ;
       
        return {storeLogin }
    }
 
}
  </script>

  <style>
  .topnav {
    overflow: hidden;
  }
  .topnav a{
    color: black
    
  }
  .active {
    color: black
  }
  

  .topnav a {
    float: left;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
  

  .topnav a:hover {
    background-color: #ddd;
    color: black;
  }
  
  .custom_btn {
     border: none;
    background-color: #f8f9fa;
  }
  

</style>