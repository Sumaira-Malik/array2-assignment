// Part 1: Basic Arrays - Product Inventory
// Challenge:
// You are tasked with creating a Product Inventory system. Implement functions and logic to
// manage object manipulation effectively.
// 1. Define a type alias named Product to represent a product with the following
// properties:
// • name (string): The name of the product.
// • price (number): The price of the product.
// • inventory (object): An object containing inventory details including:
// • stock (number): The number of products available.
// • colorOptions (string[ ]): An array listing available colors.
// 2. Create an array named products containing at least three product objects. Each
// product object should include a name, price, and inventory details.
// 3. Implement a function named changeColor that takes a product object and a new
// color as input. This function should update the color property of the product and
// adjust the price based on the new color (implement your own logic, e.g., increase by
// 10% for red, decrease by 5% for blue).
// 4. Display each product's name, price, stock, and available colors. Iterate through the
// products array and print each product's details.


type Product = {
    name: string,
    price: number,
    inventory: {
        stock: number,
        colorOptions: string[]
    },
    changeColor: (product: Product, newColor: string) => void
}

const products: Product[] = [
    {
        name: "shirt",
        price: 100,
        inventory: {
            stock: 10,
            colorOptions: ["red", "green"]
        },
        changeColor: (product: Product, newColor: string) => {
            if (product.inventory.colorOptions.includes(newColor)) {
                if (newColor === "red") {
                    product.price = product.price * 1.1;
                } else if (newColor === "green") {
                    product.price = product.price * 0.95;
                }
            } else {
                console.log(`Color ${newColor} is not available for ${product.name}`);
            }
        }
    },
    {
        name: "pants",
        price: 100,
        inventory: {
            stock: 10,
            colorOptions: ["grey", "white"]
        },
        changeColor: (product: Product, newColor: string) => {
            if (product.inventory.colorOptions.includes(newColor)) {
                if (newColor === "grey") {
                    product.price = product.price * 1.1;
                } else if (newColor === "white") {
                    product.price = product.price * 0.95;
                }
            } else {
                console.log(`Color ${newColor} is not available for ${product.name}`);
            }
        }
    },
    {
        name: "shoes",
        price: 100,
        inventory: {
            stock: 10,
            colorOptions: ["brown", "black"]
        },
        changeColor: (product: Product, newColor: string) => {
            if (product.inventory.colorOptions.includes(newColor)) {
                if (newColor === "brown") {
                    product.price = product.price * 1.1;
                } else if (newColor === "black") {
                    product.price = product.price * 0.95;
                }
            } else {
                console.log(`Color ${newColor} is not available for ${product.name}`);
            }
        }
    }
]

products.forEach(product => {
    console.log(`Product: ${product.name}`);
    console.log(`Initial Price: ${product.price}`);
    console.log(`Stock: ${product.inventory.stock}`);
    console.log(`Available Colors: ${product.inventory.colorOptions.join(', ')}`);
    
    product.changeColor(product, "red");
    console.log(`Price after changing to red: ${product.price}`);
    
    product.changeColor(product, "blue");
    console.log(`Price after attempting to change to blue: ${product.price}`);
    
    console.log(`Stock: ${product.inventory.stock}`);
    console.log(`Available Colors: ${product.inventory.colorOptions.join(', ')}`);
    console.log('---');
});
