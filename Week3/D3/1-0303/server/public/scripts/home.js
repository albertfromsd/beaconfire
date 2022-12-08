function deleteRow(idx) {
    const deadRow = document.getElementById(`${idx}`);
    deadRow.remove();
}

const editRows = document.querySelectorAll("#todolist-body form");
editRows.map( row )

function toggleRow(idx) {
    const infoRow = document.getElementById(`info-${idx}`);
    infoRow.classList.toggle("hidden");
    const editRow = document.getElementById(`edit-${idx}`);
    editRow.classList.toggle("hidden");
}