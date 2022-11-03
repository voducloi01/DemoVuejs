<template>
    <div class="mt-5">    
        <div class="container">        
            <section class="panel panel-default">   
                <div class="panel-heading">    
                    <h3 class="panel-title">Thêm sản phẩm </h3>   
                </div>  
                <form class="wrap_input">
                  <label>Tên sản phẩm</label>
                  <input type="text" name="name" v-model="product.name">
                 
                  <label>Gía Tiền</label>
                  <input type="text" name="price" v-model="product.price">
            
                  <label>Hình ảnh</label>
                  <input type="text" name="image" v-model="product.image">
                  
             
                    <input  type="button" class="btn btn-success mt-2" @click="createContact(product)" value="Add">
                    <input  type="button" class="btn btn-success mt-2" @click=" updateProduct(product)" value="Update">
              
                </form>
            </section>   
        </div>   
    </div>
</template>

<script>
 import {useData} from '../store/useData'
 import {createProduct} from '../graphql/createProduct'
 import {update_product} from  '../graphql/updateProduct'

export default {
    name: 'VueBootstrapInsertProduct',
  setup () {
    const data  = useData() ; 
    const product = data.product ;  
   
  return {product }
  } ,
  methods: {
    createContact(product){
      console.log(`Create contact: ${product}`)
      this.$apollo.mutate({
          mutation: createProduct,
          variables:{
            name : product.name ,
            price : product.price ,
            image  : product.image
          }
        }
      )
      // location.reload() ;
    },
    updateProduct(product){
      this.$apollo.mutate({
          mutation: update_product,
          variables:{
            id : product.id ,
            name : product.name ,
            price : Number(product.price ), 
            image : product.image    
          }
        }
      )
      location.reload() ;
    },
  } 
};
</script>

<style>
.wrap_input{
  display: flex ; 
  flex-direction: column ; 
  width: 30%
}

</style>