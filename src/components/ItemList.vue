<template>
  <div>
    <Item v-for="item in $store.getters.displayItems" :key="item.id" :item="item" />
  </div>
</template>

<script>
import Item from '@/components/Item.vue'
// import { fetchListData } from '../api/api'
export default {
  components: {
    Item
  },
  methods: {
    loadItems () {
      this.$bar.start()
      this.$store.dispatch('fetchListData', {
        type: 'top'
      })
      .then(items => {
        this.displayItems = items
        this.$bar.finish()
      })
    }
  },
  mounted() {
    this.loadItems()
  }
 
}
</script>
