<template>
      <div>
          <h1>Products</h1>
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
         products:productService.list()
      };
    }
}
</script>