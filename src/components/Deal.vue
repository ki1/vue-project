<template>
  <div class="deal">
    <img class="image" :src="deal.images[0].imageUrl.replace('static', 'images')+'.jpg'">
    <h2>{{deal.headline}}</h2>
    <p>
      {{deal.title}}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Deal',
    props: {
      deal: Object,
    },
  };
</script>

<style scoped lang="scss">
  h2 {
    font-size: 18px;
    margin-bottom: 0.5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  p {
    font-size: 14px;
    margin-bottom: 0.5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  .deal {
    border: 1px solid #DEE2E7;
    margin-bottom: 1em;
    width: 20rem;
  }
  .image {
    display: block;
    margin-bottom: 0.5rem;
    height: 209px;
    width: 100%;
  }
</style>
