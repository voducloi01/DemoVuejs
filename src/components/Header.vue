<template>
    <nav   class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">          

          <div class="topnav">
            <router-link to="/search">Search</router-link>
            <router-link  class="active" to="/">product</router-link>            
            <router-link  to="/login" >Login</router-link>
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
    background-color: #333;
    overflow: hidden;
  }
  

  .topnav a {
    float: left;
    color: #f2f2f2;
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