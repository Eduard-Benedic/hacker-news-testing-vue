<template>
  <div>
    <div>
      <h1>Down below there is a list of Item</h1>
      <Item v-for="item in displayItems" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import Item from '@/components/Item.vue'
import { fetchListData } from '../api/api'
export default {
  components: {
    Item
  },
  data() {
    return {
      displayItems: []
    }
  },
  methods: {
    loadItems () {
      this.$bar.start()
      fetchListData('top')
        .then(items => {
          this.displayItems = items
          this.$bar.finish()
        })
        .catch(() => this.$bar.fail())
    }
  },
  beforeMount () {
    this.loadItems()
  }
}
</script>
