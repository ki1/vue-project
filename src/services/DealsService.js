import Api from '@/services/Api';
import store  from '../store';

export default {
  store,
  getDeals(params) {
    let response = null;
    let location = params.location;
    if(location === 'shop') location = 'national-deal';
    let category = (params.category) ? '/' + params.category : '';
    let dealsPath = location + category;

    // if deals in store use those
    console.log(store.state.deals[dealsPath]);
    if (false) {

    } else {
      response = Api().get('deal/' + dealsPath + '?pageSize=10');
      return response;
    }
  },

};
