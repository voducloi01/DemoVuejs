<template>
    <div>
        <h2 class="title_cart"> My Cart</h2>
        <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name Product</th>
                <th scope="col">Price Product</th>
                <th>Số Lượng</th>
                <th scope="col">Image Product</th>
                <th scope="col">Quản lí</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for=" (product , index) in storeCart.MyCart" :key="index">
                <td>{{product.id}}</td>
                <td>{{product.product}}</td>
                <td>{{product.price}}</td>
                <td><input type="number" :value="product.SoLuong"  min="1"/></td>
                <td><img :src="product.image " width="70px"  height="70px"/></td>
                <td> <button class="btn btn-danger" @click="() => storeCart.handleDelete(product)"> Xóa </button></td>
              </tr>
             
            </tbody>
          </table>
          <h2> Tổng tiền :{{storeCart.Total}} </h2>
    </div>
</template>

<script>
import {useCart} from '../store/useCart'
export default {
    name: 'DemoCart',
    setup() {

      const storeCart = useCart() ; 
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