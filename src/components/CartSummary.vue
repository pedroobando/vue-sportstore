<template>
  <div class="float-right">
    <small>
      <router-link to="/cart" class="btn btn-sm bg-dark text-white" :class="{disabled: itemCount == 0}">
        Your cart:
        <span v-if="itemCount > 0">
          {{ itemCount }} item(s) {{ totalPrice | currency }}
        </span>
        <span v-else>
          (vacio)
        </span>    
        <i class="fa fa-shopping-cart"></i>
      </router-link>      
    </small>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      itemCount: "cart/itemCount",
      totalPrice: "cart/totalPrice"
    })
  }
}
</script>

<style>

</style>
