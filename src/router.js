import Vue from 'vue';
import Router from 'vue-router';

import Customers from './components/AppCustomers.vue';
import Products from './components/AppProducts.vue';
import LatestPurchases from './components/LatestPurchases.vue';
import BuyProduct from './components/BuyProduct.vue';

Vue.use(Router);

export default new Router({
    mode:'history',
    routes: [
        {path: '/', redirect:'customers'},
        {path: '/customers', component:Customers},
        {path: '/customers/:id', component:LatestPurchases, name:'customer-details', props:true},
        { path: '/products', component: Products },
        { path: '/products/:id', component: BuyProduct, name:'buy-product', props:true}
       
    ]
})