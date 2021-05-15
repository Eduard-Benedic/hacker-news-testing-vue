<template>
  <div class="home">

  <div class="container">
    
    <h1 class="title">Hacker news</h1>
    <ProgressBar />
    <ItemList />
  </div>

  </div>
</template>

<script>
// @ is an alias to /src
// import Item from '@/components/Item.vue'
import ItemList from '../components/ItemList.vue'
import ProgressBar from '../components/ProgressBar.vue'

export default {
  name: 'Home',
  components: {
    // Ite
    ItemList,
    ProgressBar
  }
}
</script>
<style scoped>
.title {
  font-size: 4rem;
}
.container {
  max-width: 1000px;
  margin: 0 auto;
  box-shadow: 2px 1px 12px rgba(0, 0, 0, 0.2);
  padding: 25px 25px;
}
</style>