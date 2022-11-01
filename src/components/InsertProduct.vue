<template>
    <div class="mt-5">    
        <div class="container">        
            <section class="panel panel-default">   
                <div class="panel-heading">    
                    <h3 class="panel-title">Thêm sản phẩm </h3>   
                </div>  
                <form>
                  <label>Tên sản phẩm</label>
                  <input type="text" name="name" v-model="name">
            
                  <label>Gía Tiền</label>
                  <input type="text" name="price" v-model="price">
            
                  <label>Hình ảnh</label>
                  <input type="text" name="image" v-model="image">
                  
                  <input v-if="!id" type="button" @click="createContact(name, price, image)" value="Add">
                  <!-- <input type="button" @click="clearForm()" value="Clear"> -->
                </form>
            </section>   
        </div>   
    </div>
</template>

<script>
 import gql from 'graphql-tag'

export default {
    name: 'VueBootstrapInsertProduct',
    data() {
    return {
        id : "" ,
        name : ""  ,
        price : "" , 
        image  : ""

    };
  } ,
  methods: {
    createContact(name ,price ,image){
      console.log(`Create contact: ${name}`)
      this.$apollo.mutate({
          mutation: gql`
              mutation createProduct($name: String!, $price: Int!, $image: String!) {
                createProduct(name: $name ,  price: $price  , image: $image) {
                  id,
                  name,
                  price,
                  image,
                }
              }
            `,
          variables:{
           name : name ,
            price : price ,
            image  : image
          }
        }
      )
      // location.reload();
    },
  } 
};
</script>