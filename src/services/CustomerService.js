
const customers = [
   {id:1, first_name:'Marko', last_name:'Markovic', email:'marko@gmail.com', products:[{name:'Product1'},{name:'Product11'}]},
   {id:2, first_name:'Petar', last_name:'Petrovic', email:'petar@gmail.com', products:[{name:'Product2'}]},
   {id:3, first_name:'Jovan', last_name:'Jovanovic', email:'jovan@gmail.com', products:[{name:'Product3'}]},
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
}

export const customerService = new CustomerService();
