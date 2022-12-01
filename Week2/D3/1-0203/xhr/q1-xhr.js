const tableBody =  document.querySelector("#users-table tbody");

const xhr = new XMLHttpRequest();
xhr.onload = function() {
    if( xhr.status >= 200 && xhr.status < 300 ) {
        const userList = JSON.parse(xhr.responseText);
        userList.forEach( user => createRow(user) );
    } else {
        console.log('error', xhr.responseText)
    }
}
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.send();

function createRow( user ) {
    const { 
        id, name, username, email, 
        address: { street, suite, city, zipcode, geo: { lat, lng } }, 
        phone, website, 
        company: { name: companyName, catchPhrase, bs } 
    } = user;

    const newRow = tableBody.insertRow(-1);
    newRow.id = `${id}`;
    newRow.innerHTML = `
        <td>${id}</td>
        <td>${name}</td>
        <td>${username}</td>
        <td>${email}</td>
        <td>
            ${street} ${suite} <br>
            ${city}, ${zipcode}<br>
            lat: ${lat}, long: ${lng}
        </td>
        <td>${phone}</td>
        <td>${website}</td>
        <td>
            ${companyName} <br>
            ${catchPhrase} <br>
            ${bs}
        </td>
    `;
    
}