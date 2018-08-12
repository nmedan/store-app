<template>
      <div>
          <h1>Products</h1>
          <form v-on:submit.prevent>
              <input v-model="search.title" type="text"  placeholder="Title"></input>
              <button class="btn-success" @click="searchProduct(search.title)" type="submit">Search</button>
          </form>
           <table class="table">
               <thead>
                   <th>
                       Id
                   </th>
                   <th>
                       Title
                   </th>
                   <th>
                       Quantity
                   </th>
               </thead>
               <tbody>
                   <tr v-for="(product, key) in products" :key="key">
                        <td>
                            {{product.id}}
                        </td>
                        <td>
                            {{product.title}}
                        </td>
                        <td>
                            {{product.quantity}}
                        </td>
                        <td>
                            <button class="btn btn-success" type="submit" @click="increaseQuantity(product)">+</button>
                        </td>
                        <td>
                            <button class="btn btn-danger" type="submit" @click="decreaseQuantity(product)" :disabled="product.quantity<=0">-</button>
                        </td>
                        <td>
                            <router-link :to="{name:'buy-product', params:{id:product.id}}">Sell</router-link>
                        </td>
                   </tr>
               </tbody>
          </table>
      </div>
</template>

<script>
import {productService} from '../services/ProductService'
export default {
    data() {
      return {
         products:productService.list(),
         search:{}
      };
    },
    
    methods: {          
      searchProduct(title) {
         this.products = productService.getProductsByTitle(title);
      },
      
      increaseQuantity(product) {
         productService.increaseQuantity(product);
      },
      
      decreaseQuantity(product) {
         productService.decreaseQuantity(product);
      }
   }
    
}
</script>