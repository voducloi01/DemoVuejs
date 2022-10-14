<template>
    <div class="collapse navbar-collapse custom__search" id="navbarSupportedContent">                    
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'VueBootstrapSearch',

    setup() {
        
    }
};
</script>

<style>
.custom__search{
    justify-content: center
}
</style>