// Click-to-enlarge lightbox for project detail-page images.
(function () {
  function init() {
    var overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';

    var img = document.createElement('img');
    img.className = 'lightbox-overlay-image';
    overlay.appendChild(img);
    document.body.appendChild(overlay);

    function close() {
      overlay.classList.remove('is-open');
    }

    overlay.addEventListener('click', close);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });

    var targets = document.querySelectorAll('.detail-image, .detail-overview-media-image');
    targets.forEach(function (el) {
      el.addEventListener('click', function () {
        img.src = el.src;
        img.alt = el.alt || '';
        overlay.classList.add('is-open');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
