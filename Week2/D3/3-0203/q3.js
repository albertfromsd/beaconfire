let myUrl = 'https://jsonplaceholder.typicode.com/users';


function delayedRequest(url) {
    setTimeout(
        fetch(url)
            .then( res => res.json())
            .then( userList => userList.map(user => console.log({user})) )
            .catch( e => console.log('error', e) )

    , 2000 )
}

delayedRequest(myUrl);