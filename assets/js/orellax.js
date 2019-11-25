const orellax = (function () {
  const items = document.querySelectorAll('.orellax');

  const options = {
    root: null,
    rootMargin: "0% 0% -160px",
    threshold: [0, 0.5, 1.0]
  };

  function isIntersect(entries) {
    for (let i = 0; i < entries.length; i++) {
      const e = entries[i];
      const isAbove = e.boundingClientRect.y < e.rootBounds.y;


      if (e.isIntersecting) {
        e.target.classList.add('is-orellaxActive');
        e.target.classList.remove('is-orellaxOver');
      } else {
        e.target.classList.remove('is-orellaxActive');
        if (e.boundingClientRect.y < e.rootBounds.y) {
          e.target.classList.add('is-orellaxOver');
        }
      }

    }
  }

  const observer = new IntersectionObserver(isIntersect, options);
  for (let i = 0; i < items.length; i++) {
    observer.observe(items[i]);
  }

})();
