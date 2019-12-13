<template>
  <div class="deals">
    <h1 class="pageTitle">{{routeName}}</h1>
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div v-for="deal in deals" v-bind:key="deal.id">
              <DealComponent :deal="deal"></DealComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
    <page-counter></page-counter>
  </div>
</template>

<script>
import DealsService from '@/services/DealsService'
import DealComponent from '@/components/DealComponent.vue';
import PageCounter from '@/components/PageCounter.vue';

export default {
  data() {
    return {
      loading: false,
      post: null,
      error: null,
      deals: null,
    };
  },
  components: {
    DealComponent,
    PageCounter,
  },
  created() {
    // fetch the data when the view is created and the data is already being observed
    console.log('CALLED 1');
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData',
  },
  computed: {
    routeName() {
      let route = this.$route.params.location;
      if (this.$route.params.category) route += ' - ' + this.$route.params.category;
      return route;
    }
  },
  methods: {
    async fetchData () {
      console.log('CALLED 2');
      this.error = this.post = null;
      this.loading = true;
      const response = await DealsService.getDeals({ location: this.$route.params.location, category: this.$route.params.category, store: this.$store })
      this.deals = response.data.deals
    },
  },
};
</script>

<style lang="scss">
  .pageTitle {
    font-size: 28px;
  }
</style>
