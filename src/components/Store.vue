<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col bg-dark text-white">
        <a href="" class="navbar-brand">VUE - SPORT STORE</a>
      </div>
    </div>
    <div class="row">
      <div class="col-3 bg-info p-2">
        <CategoryControls />
      </div>
      <div class="col-9 p-2">       
        <product-list />
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from "./ProductList";
import CategoryControls from "./CategoryControls";
export default {
  name: 'store',
  components: { ProductList, CategoryControls }
}
</script>

<style>

</style>
