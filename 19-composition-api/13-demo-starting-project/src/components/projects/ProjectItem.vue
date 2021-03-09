<template>
  <li>
    <h3>{{ title }}</h3>
  </li>
</template>

<script>
export default {
  props: ['title'],
};
</script>

<style scoped>
li {
  background-color: #00006b;
  color: white;
  padding: 0.5rem;
  margin: 1rem 0;
}

li h3 {
  margin: 0;
}
</style>