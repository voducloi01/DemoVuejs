<template>
    <div class="mt-5">    
        <div class="container">        
            <section class="panel panel-default">   
                <div class="panel-heading">    
<<<<<<< HEAD
                    <h3 class="panel-title">{{storeUpdate.status ? 'Add Product' : 'Update'}}  </h3>   
                </div>   
                <div class="panel-body">    
                        <div class="form-group" >   
                            <label for="name" class="col-sm-3 control-label"  >Id Product</label>    
                            <div class="col-sm-9" >  
                                <input :disabled="!storeUpdate.status" type="text" class="form-control" placeholder=" Id" v-model="storeInsert.changeId" />   
=======
                    <h3 class="panel-title">Add Product</h3>   
                </div>   
                <div class="panel-body">    
                        <div class="form-group" >   
                            <label for="name" class="col-sm-3 control-label" >Id Product</label>    
                            <div class="col-sm-9" >  
                                <input type="text" class="form-control" placeholder=" Id" v-model="store.changeId" />   
>>>>>>> develop1
                            </div>
                        </div> 
                        <div class="form-group" >   
                            <label for="name" class="col-sm-3 control-label">Name Product</label>    
                            <div class="col-sm-9" >  
<<<<<<< HEAD
                                <input type="text" class="form-control" placeholder=" Ten San Pham" v-model="storeInsert.changeName" />   
=======
                                <input type="text" class="form-control" placeholder=" Ten San Pham" v-model="store.changeName" />   
>>>>>>> develop1
                            </div>
                        </div> 
                        <div class="form-group" >   
                            <label for="name" class="col-sm-3 control-label">Price Product</label>    
                            <div class="col-sm-9" >  
<<<<<<< HEAD
                                <input type="text" class="form-control" placeholder=" Gia Tien" v-model="storeInsert.changePrice" />   
=======
                                <input type="text" class="form-control" placeholder=" Gia Tien" v-model="store.changePrice" />   
>>>>>>> develop1
                            </div>
                        </div> 
                        <div class="form-group" >   
                            <label for="name" class="col-sm-3 control-label">Image Product</label>    
                            <div class="col-sm-9" >  
<<<<<<< HEAD
                                <input type="text" class="form-control" placeholder=" Cho Them Anh Vao" v-model="storeInsert.changeImage" />   
                            </div>
                        </div>             
                            <button  v-if="storeUpdate.status" class="btn btn-success mt-2" @click="storeInsert.handleinsert"> Add Product</button>  
                            <button v-else  class="btn btn-success mt-2" @click="storeUpdate.handleUpdate">Update Product</button>   
=======
                                <input type="text" class="form-control" placeholder=" Cho Them Anh Vao" v-model="store.changeImage" />   
                            </div>
                        </div> 
                        <button class="btn btn-success mt-2" @click="store.handleinsert"> Add Product</button>                         
>>>>>>> develop1
                </div>   
            </section>   
        </div>   
    </div>
</template>

<script>
// import {ref } from 'vue'
 import {useInsert} from '../store/useInsert'
<<<<<<< HEAD
 import {useUpdate} from '../store/useUpdate'
=======



>>>>>>> develop1
export default {
    name: 'VueBootstrapInsertProduct',
    props :['ListProduct'] ,
    setup( ) {
<<<<<<< HEAD
    const storeInsert = useInsert() ;
    const storeUpdate =  useUpdate () ;        
        return {storeInsert ,storeUpdate}
=======
    const store = useInsert() ;
        console.log(store);        
        return {store}
>>>>>>> develop1
    }
};
</script>

<style >

</style>