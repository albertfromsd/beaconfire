const tableBody =  document.querySelector("#users-table tbody");

fetch('https://jsonplaceholder.typicode.com/users')
    .then( res => res.json())
    .then( userList => userList.map(user => createRow(user)) )
    .catch( e => console.log('error', e) );

// id, name, username, email, address: { street, suote, city, zipcode, geo: { lat, lng}, phone, website, company: { name, catchPhrase, bs },  }
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