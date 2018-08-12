pp<template>
      <div>
          <h1>Customers</h1>
          <table class="table">
               <thead>
                   <th>
                       Id
                   </th>
                   <th>
                       First name
                   </th>
                   <th>
                       Last name
                   </th>
                   <th>
                       Email
                   </th>
               </thead>
               <tbody>
                   <tr v-for="(customer, key) in customers" :key="key">
                        <td>
                            {{customer.id}}
                        </td>
                        <td>
                            {{customer.first_name}}
                        </td>
                        <td>
                            {{customer.last_name}}
                        </td>
                        <td>
                            {{customer.email}}
                        </td>
                        <td>
                            <router-link :to="{name:'customer-details', params:{id:customer.id}}">Latest purchases</router-link>
                        </td>
                        <td>
                            <button class="btn btn-danger" type="submit" @click="deleteCustomer(customer)">Delete</button>
                        </td>
                   </tr>
               </tbody>
          </table>
          <form  v-on:submit.prevent>
            <div class="form-group">
               <label>First name: </label>
               <input  v-model="newCustomer.first_name" type="text" placeholder="First name">
            </div>
            <div class="form-group">
               <label>Last name: </label>
               <input  v-model="newCustomer.last_name" type="text" placeholder="Last name">
            </div>
            <div class="form-group">
               <label>Email: </label>
               <input v-model="newCustomer.email" type="text" placeholder="Email">
            </div>
            <button class="btn btn-success" type="submit" @click="addCustomer">Add customer</button>
          </form>
      </div>
</template>

<script>
import {customerService} from '../services/CustomerService'

export default {
  data() {
      return {
         newCustomer:{products:[]},
         customers:customerService.list()
      };
  },
  methods: {
      addCustomer() {
            customerService.addCustomer(this.newCustomer);
            this.newCustomer = {products:[]};
      },

      deleteCustomer(customer) {
            customerService.deleteCustomer(customer);
      }
  }
}
</script>