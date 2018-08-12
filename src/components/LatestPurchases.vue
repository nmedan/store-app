<template>
      <div>
          <h1>Customer: {{customer.first_name}} {{customer.last_name}}</h1>
          <p>First name: {{customer.first_name}}</p>
          <p>Last name: {{customer.last_name}}</p>
          <p>Email: {{customer.email}}</p>
          <h3>Products</h3>
          <p v-for="(product, key) in customer.products" :key="key">{{product.title}}</p>
          <router-link  to="/customers">All customers</router-link>
      </div>
</template>

<script>
import {customerService} from '../services/CustomerService'
export default {
    props:['id'],
    data() {
      return {
         customer:customerService.getCustomer(this.id)
      };
    },

}
</script>