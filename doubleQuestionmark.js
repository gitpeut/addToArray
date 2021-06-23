let sayHi = (person) => {
    person = person ?? "Onbekende";
    console.log("Hello " + person);
}

sayHi();
sayHi("Bobbie");

let boterham = () => console.log("Hi");

boterham();

sayHi(`      een hele lange string     `);
