<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Sản Phẩm</a>
           <Search />
        </div>
      </nav>
  </template>
  
  <script>
import Search from './Search.vue';
  export default {
    name: "BootstrapExample",
    components: { Search }
}
  </script>

  <style>

</style>