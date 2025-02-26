export default class Patient {

    id :          String;
    name:         String;
    age  :        String;
    phone_number: String;

    constructor(id: String, name: String, age: String, phone_number: String) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.phone_number = phone_number;
    }
}