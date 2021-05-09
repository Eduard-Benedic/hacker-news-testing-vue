<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ItemList />
  </div>
</template>

<script>
// @ is an alias to /src
// import Item from '@/components/Item.vue'
import ItemList from '../components/ItemList.vue'

export default {
  name: 'Home',
  components: {
    // Ite
    ItemList
  }
}
</script>
