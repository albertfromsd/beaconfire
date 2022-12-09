document.addEventListener("DOMContentLoaded", function(event) { 
    var scrollpos = localStorage.getItem('scrollpos');
    if (scrollpos) window.scrollTo(0, scrollpos);
});

window.onbeforeunload = function(e) {
    localStorage.setItem('scrollpos', window.scrollY);
};

function toggleRow(idx) {
    const infoRow = document.getElementById(`info-${idx}`);
    infoRow.classList.toggle("hidden");
    const editRow = document.getElementById(`edit-${idx}`);
    editRow.classList.toggle("hidden");
}

// async function deleteItem(_id) {
//     try {
//         const res = await fetch("/todo/todolist", {
//             method: 'DELETE',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({_id})
//         });
//         if( res.status === "Success" ) {
//             window.location = res.redirect;
//         }

//     } catch(e) {
    
//         console.log( 'delete error', e );
//     }
// }


async function createTodoList() {
    try {
        await fetch('/todo/seed/todolist', { method: "POST" });
    } catch(e) {
        console.log( 'error in creating todo list', {e} );
    }
}