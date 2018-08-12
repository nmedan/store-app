<template>
      <div v-if="product.quantity>0">
          <h1>Product: {{product.title}}</h1>
          <p>Title: {{product.title}}</p>
          <p>Quantity: {{product.quantity}}</p>
		     <form v-on:submit.prevent>
		         <div class="form-group">
			           <label>Customer: </label>
		             <select v-model="selectedCustomer">
			               <option v-for="(customer, key) in customers" :key="key" v-bind:value="customer">
				                  {{customer.first_name}} {{customer.last_name}}
				             </option>
			           </select>
			       </div>
			       <button class="btn btn-success" type="submit" @click="validated()? buyProduct(selectedCustomer.id) : ''">Confirm</button>
			       <router-link  to="/products"><button class="btn">Cancel</button></router-link>
		      </form>	  
      </div>
      <div v-else>
        <h1>There aren't any products of that type</h1>
        <p><router-link  to="/products"><button class="btn">Go back to products</button></router-link></p>
      </div>
</template>


<script>
import {productService} from '../services/ProductService'
import {customerService} from '../services/CustomerService'

export default {
     props:['id'],
     data() {
      return {
         product:productService.getProduct(this.id),
		     customers:customerService.list(),
         selectedCustomer:{}
      };
    },
	methods: {
	   buyProduct(id) {
		      customerService.buyProduct(id, this.product);
			    productService.decreaseQuantity(this.product);
          this.selectedCustomer = {};        
		 },
     
     validated() {
         if(!this.selectedCustomer.id) {
              alert("You must select customer.");
              return false;
         }
         return true;
     }
	}
}
  
</script>
