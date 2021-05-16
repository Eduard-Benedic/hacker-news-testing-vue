<template>
  <div>
    <Item v-for="item in $store.getters.displayItems" :key="item.id" :item="item" />
    <span> {{$route.params.page || 1}}/{{$store.getters.maxPage}} </span>
   
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
        type: this.$route.params.type
      })
      .then(() => {
        if (this.$route.params.page > this.$store.getters.maxPage) {
          this.$router.replace(`/${this.$route.params.type}/1`)
          return
        }
        this.$bar.finish()
      })
    }
  },
  mounted() {
    this.loadItems()
  }
 
}
</script>
