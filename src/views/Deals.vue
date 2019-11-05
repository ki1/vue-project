<template>
  <div class="deals">
    <h1>{{this.$route.params.location}}</h1>


    <div class="container-fluid">

      <div class="container">
        <div class="row">
          <div class="col-sm">

            <div v-for="deal in deals" v-bind:key="deal.id">

              <b-card
                :title="deal.headline"
                :img-src="deal.images[0].imageUrl.replace('static', 'images')+'.jpg'"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>
                  {{deal.title}}
                  <!--<br>route:<b>{{ routeName }}</b>-->


                </b-card-text>

                <!--<b-button href="#" variant="primary">Go somewhere</b-button>-->
              </b-card>

            </div>



          </div>
        </div>
      </div>


    </div>

  </div>
</template>

<script>
import DealsService from '@/services/DealsService'

export default {
  data() {
    return {
      loading: false,
      post: null,
      error: null,
      deals: null,
    };
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    console.log('IS THIS CALLED 1');
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
      console.log('IS THIS CALLED');
      this.error = this.post = null;
      this.loading = true;
      // replace `getPost` with your data fetching util / API wrapper
      const response = await DealsService.getDeals({ location: this.$route.params.location })
      this.deals = response.data.deals
    },
  },
};
</script>
