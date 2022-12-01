import { products } from './0104-2-products.js';

let table = document.getElementById("products-table");
const form = document.getElementById("products-form");

function createRow( name, category, price, idx ) {
    if( idx === undefined ) {
        products.lastIndex++;
        idx = products.lastIndex;
    }
    const newRow = document.createElement("tr");
    newRow.id = `${idx}`;
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${category}</td>
        <td>${price}</td>
        <td>
            <button onclick="deleteRow(${idx})">Delete</button>
        </td>
    `;
    table.appendChild(newRow);
}

products.map( (product, idx) => {
    const { name, category, price } = product;
    createRow( name, category, price, idx );
} )

form.addEventListener("submit", e => {
    e.preventDefault();

    // is it possible to destructure to replace multi lines?
    // const name = form.elements["name"].value;
    // const category = form.elements["category"].value;
    // const priceStr = form.elements["price"].value;
    const { name: { value: nameValue }, category: { value: categoryValue }, price: { value: priceStr } } = form.elements;
    const price = parseInt(priceStr).toFixed(2);

    createRow(nameValue, categoryValue, price);

    form.elements["name"].value="";
    form.elements["category"].value="";
    form.elements["price"].value="";
})