<template>
   <div>
      <Header /> 
      <Product />
   </div>
</template>

<script>
import Header from './components/Header.vue';
import Product from './components/Product.vue';

export default {
    name: "App",
<<<<<<< Updated upstream
    components: { Header, Product }
=======
    components: { Header, Product, InsertProduct } ,
    setup() {
         const store = useData() ;
         const ListProduct = store.ListProduct
          return { ListProduct}
    } 
>>>>>>> Stashed changes
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
