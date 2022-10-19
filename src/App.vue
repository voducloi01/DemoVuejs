<template>

      
      
      <div> <Header/>     
            <router-view>
                  <Login />
                  <ProductSearch />                                                              
                  <Product />                            
            </router-view>    
                          
                               
      </div>


</template>

<script>
import Login from './components/Login.vue';
import Header from './components/Header.vue';
import Product from './components/Product.vue';
import ProductSearch from './components/ProductSearch.vue';

export default {
    name: "App",
    components: { Login ,Header ,Product ,ProductSearch }
   
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
