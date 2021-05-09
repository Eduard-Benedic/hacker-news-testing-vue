<template>
  <div>
    <a :href="item.url"> {{ item.title }} </a>
    <h4> {{item.author}} </h4>
    <span> {{ item.score }} </span>
    {{item.url}}
  </div>
</template>

<script>
export default {
  props: {
    item: {
      title: String,
      url: String,
      author: String,
      score: Number
    }
  }
}
</script>