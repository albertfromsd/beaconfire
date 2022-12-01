export function fetchUser(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then( res => res.json())
        .then( user => user.map(userInfo => {
            console.log( {userInfo} );
        }))
        .catch( e => console.log('fetchUser error', e) );
};
export function fetchUserPosts(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then( res => res.json())
        .then( post => post.map(postInfo => {
            console.log( {postInfo} );
        }))
        .catch( e => console.log('fetchUserPosts error', e) );
};
export function fetchUserTodos(id) {
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
        .then( res => res.json())
        .then( todos => todos.map(todoItem => {
            console.log( {todoItem} );
        }))
        .catch( e => console.log('fetchUserTodo error', e) );
};