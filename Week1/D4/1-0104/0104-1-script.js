const tabs = document.querySelectorAll("[data-tab-button]");
const contents = document.querySelectorAll('[data-tab-content]');

tabs.forEach( tab => {
    tab.addEventListener('click', () => {
        const button = document.querySelector(tab.dataset.tabButton);
        
        contents.forEach( content => {
            content.classList.remove('active');
        } )

        tabs.forEach( tab => {
            tab.classList.remove('active');
        } )

        tab.classList.add('active');
        button.classList.add('active');
    })
} )