<template>
    <div>
        <h2 class="title_cart"> My Cart</h2>
        <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name Product</th>
                <th scope="col">Price Product</th>
                <th scope="col">Image Product</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in storeCart.MyCart" :key="product.id">
                <th scope="row">{{product.id}}</th>
                <td>{{product.product}}</td>
                <td>{{product.price}}</td>
                <td><img :src="product.image " width="100"  height="100px"/></td>
              </tr>
            </tbody>
          </table>
    </div>
</template>

<script>
import {useCart} from '../store/useCart'
export default {
    name: 'DemoCart',
    setup() {

      const storeCart = useCart() ; 
      console.log(storeCart.MyCart);
      return {storeCart}

    }
};
</script>

<style>
.title_cart {
    text-align: center;
    margin: 15px 0;
    color: red ;
}
</style>