document.addEventListener("DOMContentLoaded", function(event) { 
    var scrollpos = localStorage.getItem('scrollpos');
    if (scrollpos) window.scrollTo(0, scrollpos);
});

window.onbeforeunload = function(e) {
    localStorage.setItem('scrollpos', window.scrollY);
};

async function toggleLike(id) {
    const result = await(`/songs/${id}`, {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({userIdx: 1})
    });

    window.location.reload();
}

const toggleBtn = document.getElementById("toggle-form-button");
toggleBtn.innerText = 'Register Here'
toggleBtn.addEventListener('click', e => {
    console.log(toggleBtn.value);
    if( toggleBtn.value === "false" ) {
        toggleBtn.value = 'true';
        toggleBtn.innerText = 'Login Here'
    } else {
        toggleBtn.value = 'false';
        toggleBtn.innerText = 'Register Here'
        
    }
})

function toggleLoginReg() {
    const loginForm = document.getElementById("login-form");
    const regForm = document.getElementById("register-form");

    loginForm.classList.toggle("hidden");
    regForm.classList.toggle("hidden");

    
}