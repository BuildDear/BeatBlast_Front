function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.we-offer__title');
  let elementsSec = document.querySelectorAll('.we-offer__card')
  
  for (let elm of elements) {
    observer.observe(elm);
  }

  for (let elm of elementsSec) {
    observer.observe(elm);
  }