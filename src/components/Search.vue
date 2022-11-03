<template>
    <div class="collapse navbar-collapse custom__search" id="navbarSupportedContent"  >                    
        <form class="d-flex">
          <input v-model="search.searchText" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button  class="btn btn-outline-success">Search</button>
        </form>
    </div>
</template>

<script>

import {useData} from '../store/useData'

export default {
    name: 'VueBootstrapSearch',

    setup() {
        const search = useData() ;
        return { search}
    }
};
</script>

<style>
.custom__search{
    justify-content: center
}
</style>