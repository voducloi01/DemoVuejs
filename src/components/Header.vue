<template>
    <nav   class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">          

          <div class="topnav">
            <router-link class="active" to="/search">Search</router-link>
            <router-link class="active" to="/">Product</router-link>            
            <router-link class="active" to="/login" >Login</router-link>
            <router-link class="active" to="/cart" >Cart</router-link>
          </div>
           <Search />
        </div>

      </nav>

  </template>
  
  <script>
import Search from './Search.vue';

  export default {
    name: "BootsrapExample",
    props : ['show'] , 
    components: { Search } , 
 
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
  


</style>