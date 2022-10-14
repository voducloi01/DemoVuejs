<template>
    <div class="mt-5">    
        <div class="container">        
            <section class="panel panel-default">   
                <div class="panel-heading">    
                    <h3 class="panel-title">Add Product</h3>   
                </div>   
                <div class="panel-body">    
                        <div class="form-group" >   
                            <label for="name" class="col-sm-3 control-label" >Id Product</label>    
                            <div class="col-sm-9" >  
                                <input type="text" class="form-control" placeholder=" Id" v-model="store.changeId" />   
                            </div>
                        </div> 
                        <div class="form-group" >   
                            <label for="name" class="col-sm-3 control-label">Name Product</label>    
                            <div class="col-sm-9" >  
                                <input type="text" class="form-control" placeholder=" Ten San Pham" v-model="store.changeName" />   
                            </div>
                        </div> 
                        <div class="form-group" >   
                            <label for="name" class="col-sm-3 control-label">Price Product</label>    
                            <div class="col-sm-9" >  
                                <input type="text" class="form-control" placeholder=" Gia Tien" v-model="store.changePrice" />   
                            </div>
                        </div> 
                        <div class="form-group" >   
                            <label for="name" class="col-sm-3 control-label">Image Product</label>    
                            <div class="col-sm-9" >  
                                <input type="text" class="form-control" placeholder=" Cho Them Anh Vao" v-model="store.changeImage" />   
                            </div>
                        </div> 
                        <button class="btn btn-success mt-2" @click="store.handleinsert"> Add Product</button>                         
                </div>   
            </section>   
        </div>   
    </div>
</template>

<script>
// import {ref } from 'vue'
 import {useInsert} from '../store/useInsert'



export default {
    name: 'VueBootstrapInsertProduct',
    props :['ListProduct'] ,
    setup( ) {
    const store = useInsert() ;
        console.log(store);        
        return {store}
    }
};
</script>

<style >

</style>