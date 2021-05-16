<template>
  <div class="card">
    <a :href="item.url"> {{ item.title }} </a>
    <h4 v-if="item.author"> {{item.author}} </h4>
    <span> {{ item.score }} </span>
    <span>{{item.url}}</span>
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

<style scoped>
.card {
  margin-bottom: 40px;
  box-shadow: 1px 2px 10px  rgba(0, 0, 0, .1);
  padding: 15px 25px;
}
a {
  text-decoration: none;
  color: #035462;

  font-weight: bold;
  font-size: 1.2rem;
}

a:hover {
  color: #04a1bd;
}
</style>