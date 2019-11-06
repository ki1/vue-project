<template>
  <div class="deals">
    <h1 class="pageTitle">{{this.$route.params.location}}</h1>
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
import DealComponent from '@/components/Deal.vue';
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
    // fetch the data when the view is created and the data is
    // already being observed
    console.log('CALLED 1');
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData',
  },
  computed: {
    routeName() {
      // We will see what `params` is shortly
      console.log(this.$route.name);
      return this.$route.name
    }
  },
  methods: {
    async fetchData () {
      console.log('CALLED 2');
      this.error = this.post = null;
      this.loading = true;
      // replace `getPost` with your data fetching util / API wrapper
      const response = await DealsService.getDeals({ location: this.$route.params.location })
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
