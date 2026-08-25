window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    // Add or remove class based on scroll position
    if (window.scrollY > 50) { // Change '50' to the desired scroll threshold
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function toggleSlidingSection() {
    const slidingSection = document.getElementById("slidingSection");
    if (slidingSection.style.display === "none" || slidingSection.style.display === "") {
        slidingSection.style.display = "block"; // Show the sliding section
    } else {
        slidingSection.style.display = "none"; // Hide the sliding section
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const colorButtons = document.querySelectorAll('.block1 .ab .col button');
    const images = document.querySelectorAll('.block1 .aa .img1 img');

    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetImageId = button.getAttribute('data-target');

            // Hide all images
            images.forEach(img => img.classList.remove('active'));

            // Show the selected image
            const targetImage = document.getElementById(targetImageId);
            targetImage.classList.add('active');

            // Remove active class from all buttons and add it to the clicked one
            colorButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Get all images inside img1
    const images = document.querySelectorAll('.block1 .aa .img1 img');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeButton = document.querySelector('.close-btn');

    // When an image is clicked, open the modal with the clicked image
    images.forEach(img => {
        img.addEventListener('click', () => {
            // Set the src of the modal image to the clicked image's src
            modalImage.src = img.src;
            modal.style.display = 'flex'; // Show the modal
        });
    });

    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none'; // Hide the modal
    });

    // Close the modal if the user clicks outside the image (optional)
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none'; // Hide the modal if outside is clicked
        }
    });
});

        const imgDiv1 = document.querySelector('.imgdiv');
        const images1 = document.querySelectorAll('.imgdiv .image');
        const buttons1 = document.querySelectorAll('.button');

        function showImage(index) {
            const offset = -index * 100;
            imgDiv.style.transform = `translateX(${offset}%)`;
        }

        function showSpecificImage(imageIndex) {
            showImage(imageIndex);
            buttons.forEach((button, idx) => {
                if (idx === imageIndex) {
                    button.classList.add('active');
                } else {
                    button.classList.remove('active');
                }
            });
        }

        // Initialize the carousel
        showSpecificImage(0);


 // Function to show background and save the selection in localStorage
 function showBg(bgClass, btn) {
    // Hide all backgrounds
    const allBackgrounds = document.querySelectorAll('.txt img');
    allBackgrounds.forEach(bg => bg.style.display = 'none');

    // Show the selected background
    const selectedBg = document.querySelector(`.${bgClass}`);
    if (selectedBg) {
        selectedBg.style.display = 'block';
    }

    // Save the selected background in localStorage
    localStorage.setItem('selectedBackground', bgClass);

    // Reset button colors
    const allButtons = document.querySelectorAll('.btn button');
    allButtons.forEach(button => button.classList.remove('active'));

    // Highlight the clicked button
    btn.classList.add('active');
}

// Check if a background was previously selected and set it
window.onload = function() {
    const savedBg = localStorage.getItem('selectedBackground');
    if (savedBg) {
        const savedBtn = document.querySelector(`button[onclick="showBg('${savedBg}', this)"]`);
        if (savedBtn) {
            savedBtn.click();  // Simulate a click to show the saved background
        }
    } else {
        // Default to showing the first background if none is saved
        const defaultBtn = document.querySelector('button[onclick="showBg(\'bg1\', this)"]');
        if (defaultBtn) {
            defaultBtn.click();
        }
    }
};

       document.addEventListener("DOMContentLoaded", () => {
    const imgDiv = document.querySelector('.imgdiv1');
    const images = document.querySelectorAll('.imgdiv1 .image1');
    const buttons = document.querySelectorAll('.button1');

    function showImage(index) {
        const offset = -index * 100; // Calculate the offset based on the index
        imgDiv.style.transform = `translateX(${offset}%)`;
    }

    function showSpecificImage(imageIndex) {
        showImage(imageIndex);
        buttons.forEach((button, idx) => {
            if (idx === imageIndex) {
                button.classList.add('active'); // Highlight the active button
            } else {
                button.classList.remove('active'); // Remove highlight from others
            }
        });
    }

    // Initialize the carousel
    showSpecificImage(0);

    // Add event listeners to buttons
    buttons.forEach((button, idx) => {
        button.addEventListener('click', () => showSpecificImage(idx));
    });
});