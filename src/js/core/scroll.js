// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function() {
    // Select all elements with the class 'section'
    var sections = document.querySelectorAll('.section');

    // Initialize the index of the current section to 0
    var currentSectionIndex = 0;

    // Flag to prevent multiple simultaneous scroll actions
    var isScrolling = false;

    // Add event listener for mouse wheel scrolling
    window.addEventListener("wheel", handleWheel, { passive: false });

    // Function to handle mouse wheel scrolling
    function handleWheel(e) {
        // Prevent default scrolling behavior
        e.preventDefault();

        // If already scrolling, do nothing
        if (isScrolling) return;

        // Set scrolling flag to true
        isScrolling = true;

        // Determine the direction of the scroll
        var delta = e.deltaY || e.detail || e.wheelDelta;

        // Scroll to the next or previous section based on the scroll direction
        if (delta > 0) {
            scrollToNextSection();
        } else {
            scrollToPreviousSection();
        }

        // Reset scrolling flag after a delay to prevent rapid scrolling
        setTimeout(function() {
            isScrolling = false;
        }, 400);
    }

    // Function to scroll to the next section
    function scrollToNextSection() {
        // Loop through all sections
        for (var i = 0; i < sections.length; i++) {
            // Get the bounding rectangle of the current section
            var rect = sections[i].getBoundingClientRect();

            // If the top of the current section is more than halfway down the viewport
            if (rect.top > window.innerHeight / 2) {
                // Update the current section index
                currentSectionIndex = i;
                // Scroll smoothly to the current section
                sections[i].scrollIntoView({ behavior: 'smooth' });
                // Exit the loop
                break;
            }
        }
    }

    // Function to scroll to the previous section
    function scrollToPreviousSection() {
        // If there is a previous section
        if (currentSectionIndex > 0) {
            // Move to the previous section
            currentSectionIndex--;
            sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
        }
    }
});
