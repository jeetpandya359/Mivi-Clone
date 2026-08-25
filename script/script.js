window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    // Add or remove class based on scroll position
    if (window.scrollY > 50) { // Change '50' to the desired scroll threshold
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function toggleSlidingSectioneb() {
    toggleSection('slidingSection-eb');
}

function toggleSlidingSectionsb() {
    toggleSection('slidingSection-sb');
}

function toggleSlidingSectionep() {
    toggleSection('slidingSection-ep');
}

function toggleSlidingSectionsp() {
    toggleSection('slidingSection-sp');
}

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const overlay = document.getElementById('overlay');
    const body = document.body;

    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        overlay.style.display = 'block';
        body.classList.add('no-scroll');
    } else {
        closeSection(sectionId);
    }
}

function closeSection(sectionId) {
    const section = document.getElementById(sectionId);
    const overlay = document.getElementById('overlay');
    const body = document.body;

    section.style.display = 'none';
    overlay.style.display = 'none';
    body.classList.remove('no-scroll');
}

document.getElementById('overlay').addEventListener('click', () => {
    const sections = ['slidingSection-eb', 'slidingSection-sb', 'slidingSection-ep', 'slidingSection-sp'];
    sections.forEach(sectionId => closeSection(sectionId));
});








const superPodsElement = document.querySelector("#superPods");

    // Add a click event listener
    superPodsElement.addEventListener("click", function() {
        // Open a new page
        window.location.href = "http://127.0.0.1:5500/html/superP.html"; // Replace with your desired URL
    });