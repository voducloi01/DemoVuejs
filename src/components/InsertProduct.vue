<template>
    <div class="mt-5">    
        <div class="container">        
            <section class="panel panel-default">   
                <div class="panel-heading">    
                    <h3 class="panel-title">{{storeUpdate.status ? 'Add Product' : 'Update'}}  </h3>   
                </div>   
                <div class="panel-body">    
                        <div class="form-group" >   
                          
                            <label for="name" class="col-sm-3 control-label"  >Id Product</label>    
                            <div class="col-sm-9" >
                                <ValidationProvider rules="required|min:1 " v-slot="{ errors }">  
                                <input :disabled="!storeUpdate.status" type="text" class="form-control" placeholder=" Id" v-model="product.id" />   
                                <span style="color: red;" id="error">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                        </div> 
                        <div class="form-group" >   
                            <label for="name" class="col-sm-3 control-label">Name Product</label>    
                            <div class="col-sm-9" > 
                                <ValidationProvider rules="required|min:1 " v-slot="{ errors }">   
                                <input type="text" required class="form-control" placeholder=" Ten San Pham" v-model="product.product" />   
                                <span style="color: red;" id="error">{{ errors[0] }}</span>
                            </ValidationProvider>
                            </div>
                        </div> 
                        <div class="form-group" >   
                            <label for="name"  class="col-sm-3 control-label">Price Product</label>    
                            <div class="col-sm-9" >
                                <ValidationProvider rules="required|min:1 " v-slot="{ errors }">    
                                <input type="text" required class="form-control" placeholder=" Gia Tien" v-model="product.price" />   
                               <span style="color: red;" id="error">{{ errors[0] }}</span>
                            </ValidationProvider>
                            </div>
                        </div> 
                        <div class="form-group" >   
                            <label for="name" class="col-sm-3 control-label">Image Product</label>    
                            <div class="col-sm-9" >  
                                <ValidationProvider rules="required|min:1 " v-slot="{ errors }">         
                                    <input type="text" required class="form-control" placeholder=" Cho Them Anh Vao" v-model="product.image" />   
                                    <span style="color: red;" id="error">{{ errors[0] }}</span>
                                </ValidationProvider>
                                </div>
                        </div>             
                            <button v-if="storeUpdate.status" class="btn btn-success mt-2" @click="() => storeData.handleinsert(product)"> Add Product</button>  
                            <button v-else  class="btn btn-success mt-2" @click="storeUpdate.handleUpdate">Update Product</button>   
                </div>   
            </section>   
        </div>   
    </div>
</template>

<script>
// import {ref } from 'vue'
 import {useUpdate} from '../store/useUpdate'
 import {useData} from '../store/useData'
 import { ValidationProvider } from 'vee-validate';
export default {
    name: 'VueBootstrapInsertProduct',
    props :['ListProduct'] ,
    components: {
    ValidationProvider
  } ,
  
    setup( ) {  
   
    const storeUpdate =  useUpdate () ;    
    const storeData = useData() ;  
    const product = storeData.product ;  
        return { storeUpdate ,product ,storeData}
    }
     
};
</script>

<style >

</style>