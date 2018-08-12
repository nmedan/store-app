
const products = [
   {id:1, title:'Product1', quantity:10},
   {id:2, title:'Product2', quantity:5},
   {id:3, title:'Product3', quantity:8},
]

class ProductService {
    list() {
        return products;
    }    

    getProduct(id) {
        let product = products.find(product => product.id === id);
        return product;
    }

    getProductsByTitle(title) {
        let productsByTitle = products.filter(product=>product.title===title);
        return productsByTitle;
    }

    increaseQuantity(product) {
        product.quantity++;
    }

    decreaseQuantity(product) {
        product.quantity--;
    }
}

export const productService = new ProductService();