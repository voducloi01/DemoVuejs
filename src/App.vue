<template>
   <div>
      <Header /> 
      <Product :ListProduct="ListProduct"/>    
      <InsertProduct :ListProduct="ListProduct"/>
   </div>
</template>

<script>
import Header from './components/Header.vue';
import Product from './components/Product.vue';

import InsertProduct from './components/InsertProduct.vue';
import {useData} from './store/useData'

export default {
    name: "App",
    components: { Header, Product, InsertProduct } ,
    setup() {
         const store = useData() ;
         console.log(store);
         const ListProduct = store.ListProduct
          return { ListProduct}
    } 
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
