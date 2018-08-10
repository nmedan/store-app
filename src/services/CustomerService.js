
const customers = [
   {id:1, first_name:'Marko', last_name:'Markovic', email:'marko@gmail.com'},
   {id:2, first_name:'Petar', last_name:'Petrovic', email:'petar@gmail.com'},
   {id:3, first_name:'Jovan', last_name:'Jovanovic', email:'jovan@gmail.com'},
]

let nextId = 4;

class CustomerService {
    list() {
        return customers;
    }
}

export const customerService = new CustomerService();
