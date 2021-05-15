<template>
  <div @click="logClicked" 
  :class='{hidden: hidden, error: error}'
  :style="{width: `${percent}%`}">
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      hidden: true,
      error: false,
      percent: 0
    }
  },
  methods: {
    logClicked() {
      console.log('clicked')
    },
    start() {
      this.hidden = false
      this.percent = 0
      this.timer = setInterval(() => {
        this.percent++
      }, 10)
    },
    finish() {
      this.percent = 100
      this.hidden = true
      clearInterval(this.timer)
    },
    fail() {
      this.error = true
    }
  }
}
</script>
<style scoped>
div {
  height: 10px;
  width: 100vw;
  position: fixed;
  display: block;
  background: purple;
  z-index: 200;
  top: 0;
}
.error {
  background-color: red;
}
.hidden {
  display: none;
}
</style>
