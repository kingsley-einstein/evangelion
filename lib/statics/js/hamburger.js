const hamburger = document.getElementById('hamburger');
const links = document.getElementById('head-links');

hamburger.addEventListener('click', (event) => {
    console.log(event);
    links.classList.toggle('showing');
});

//console.log(hamburger);
//console.log(links);