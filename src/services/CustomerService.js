
const customers = [
    { id: 1, first_name: 'Marko', last_name: 'Markovic', email: 'marko@gmail.com', products: []},
    { id: 2, first_name: 'Petar', last_name: 'Petrovic', email: 'petar@gmail.com', products: []},
    { id: 3, first_name: 'Jovan', last_name: 'Jovanovic', email: 'jovan@gmail.com', products: []},
]

let nextId = 4;

class CustomerService {
    list() {
        return customers;
    }

    addCustomer(customer) {
        customer.id = nextId;
        customers.push(customer);
        nextId++;
    }

    deleteCustomer(customer) {
        let index = customers.indexOf(customer);
        customers.splice(index, 1);
    }

    getCustomer(id) {
        let customer = customers.find(customer=>customer.id===id);
        return customer;
    }

    buyProduct(id, product) {
        let customer = customers.find(customer => customer.id === id);
        customer.products.push(product);
    }
}

export const customerService = new CustomerService();
