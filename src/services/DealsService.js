import Api from '@/services/Api';

export default {
  getDeals(params) {
    let location = params.location;
    if(location === 'shop') location = 'national-deal';
    return Api().get('deal/' + location + '?pageSize=10');
  },
};
