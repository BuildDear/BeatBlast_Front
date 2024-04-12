// Function to handle the intersection observer callback
function onEntry(entry) {
  entry.forEach(change => {
    // Check if the observed element is intersecting with the viewport
    if (change.isIntersecting) {
      // Add a CSS class to the observed element to show it
      change.target.classList.add('element-show');
    }
  });
}

// Options for the IntersectionObserver
let options = {
  threshold: [0.5] // Threshold for when the intersection callback should be triggered
};

// Creating an IntersectionObserver instance with the defined callback function and options
let observer = new IntersectionObserver(onEntry, options);

// Selecting elements to observe
let elements = document.querySelectorAll('.we-offer__title'); // Selecting elements with class 'we-offer__title'
let elementsSec = document.querySelectorAll('.we-offer__card'); // Selecting elements with class 'we-offer__card'

// Observing each selected element
for (let elm of elements) {
  observer.observe(elm);
}

for (let elm of elementsSec) {
  observer.observe(elm);
}
