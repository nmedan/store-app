<template>
      <div>
          <h1>Customers</h1>
          <table>
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
                            <button type="submit" @click="deleteCustomer(customer)">Delete</button>
                        </td>
                   </tr>
               </tbody>
          </table>
      </div>
</template>

<script>
import {customerService} from '../services/CustomerService'

export default {
  data() {
      return {
         newCustomer:{},
         customers:customerService.list()
      };
  },
  methods: {
      deleteCustomer(customer) {
            let indexOfCustomerToDelete = this.customers.indexOf(customer);
            this.customers.splice(indexOfCustomerToDelete, 1);
      }
  }
}
</script>