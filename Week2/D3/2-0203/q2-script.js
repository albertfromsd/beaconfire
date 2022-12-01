const form = document.getElementById("user-info-form");
const userInfoTableBody = document.getElementById("user-info-table-body");
const userPostsTableBody = document.getElementById("user-posts-table-body");
console.log( {userPostsTableBody} );

const userTodosTableBody = document.getElementById("user-todos-table-body");
    


form.addEventListener("submit", e => {
    e.preventDefault();

    const userId = document.getElementById("userId").value;
    const urls = [
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
        `https://jsonplaceholder.typicode.com/todos?userId=${userId}`,
    ];
    const fetchesArr = urls.map( url => fetch(url) );

    Promise.all(fetchesArr).then( res => { 
        return Promise.all(res.map( r => r.json() ))
    } ).then(([userInfo, userPosts, userTodos]) => {
        console.log( {userInfo, userPosts, userTodos} );
        createUserRow(userInfo);
        
        userPosts.map( post => createPostRow(post) );
        userTodos.map( todo => createTodoRow(todo) );
    }).catch( e => {
        createErrorMessage();
    } )

})


function createUserRow( user ) {
    const { 
        id, name, username, email, 
        address: { street, suite, city, zipcode, geo: { lat, lng } }, 
        phone, website, 
        company: { name: companyName, catchPhrase, bs } 
    } = user;

    const newRow = userInfoTableBody.insertRow(-1);
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

function createPostRow( post ) {
    const { id, userId, title, body } = post;
    

    const postRow = userPostsTableBody.insertRow(-1);
    postRow.classList.add("user-posts-title")
    postRow.innerHTML = `
        <th colspan="2"> User ID: ${userId} </th>
        <th colspan="2"> Post ID: ${id} </th>
        <th colspan="4"> ${title} </th>
    `;   

    const postBodyRow = userPostsTableBody.insertRow(-1);
    postBodyRow.innerHTML = `
        <td colspan="8">${body}</td>
    `
    const gapRow = userPostsTableBody.insertRow(-1);
    gapRow.innerHTML = `
        <td colspan="8">&nbsp</td>
    `
}

function createTodoRow( todo ) {
    const { userId, id, title } = todo;
    let completed = todo.completed 
        ? 'Yes'
        : 'No'

    const todoRow = userTodosTableBody.insertRow(-1);
    todoRow.innerHTML = `
        <td colspan="2"> User ID: ${userId} </td>
        <td colspan="2"> Todo ID: ${id} </td>
        <td colspan="3"> ${title} </td>
        <td colspane="1">Completed?: ${completed} </td>
    `;   
}

function createErrorMessage() {
    const error = "User was not found. Please try another user ID."
    const label = document.getElementById("form-error-message")

    label.innerHTML = `
        ${error}
    `
}