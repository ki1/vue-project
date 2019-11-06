<template>
    <p>
      Pages Viewed: {{pageCount}}
    </p>
</template>

<script>
  export default {
    name: 'PageCounter',
    computed: {
      pageCount () {
        return this.$store.state.pageCount
      }
    },
  };
</script>

<style scoped lang="scss">
  p {
    margin-bottom: 0.5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
</style>
