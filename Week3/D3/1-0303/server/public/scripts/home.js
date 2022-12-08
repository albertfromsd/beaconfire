document.getElementById("req").addEventListener('click', () => {
    const url = "http://localhost:3000";
    fetch(url).then(res => res.json()).then(data => console.log(data));
});

function deleteRow(idx) {
    const deadRow = document.getElementById(`${idx}`);
    deadRow.remove();
}

function toggleRow(idx) {
    const infoRow = document.getElementById(`info-${idx}`);
    infoRow.classList.toggle("hidden");
    const editRow = document.getElementById(`edit-${idx}`);
    editRow.classList.toggle("hidden");
}