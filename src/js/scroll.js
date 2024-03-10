document.addEventListener("DOMContentLoaded", function() {
    var sections = document.querySelectorAll('.section');
    var currentSectionIndex = 0;
    var isScrolling = false;

    window.addEventListener("wheel", handleWheel, { passive: false });

    function handleWheel(e) {
        e.preventDefault();

        if (isScrolling) return;

        isScrolling = true;

        var delta = e.deltaY || e.detail || e.wheelDelta;

        if (delta > 0) {
            scrollToNextSection();
        } else {
            scrollToPreviousSection();
        }

        setTimeout(function() {
            isScrolling = false;
        }, 400);
    }

    function scrollToNextSection() {
        for (var i = 0; i < sections.length; i++) {
            var rect = sections[i].getBoundingClientRect();

            if (rect.top > window.innerHeight / 2) {
                currentSectionIndex = i;
                sections[i].scrollIntoView({ behavior: 'smooth' });
                break;
            }
        }
    }

    function scrollToPreviousSection() {
        if (currentSectionIndex > 0) {
            currentSectionIndex--;
            sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
        }
    }
});
