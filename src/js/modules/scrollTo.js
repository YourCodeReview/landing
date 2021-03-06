const ScrollTo = {
  init: function() {
    let _scroll_ = '[data-action="scroll"]';

    let click_event = (event) => {
      let $link = event.target.closest(`${_scroll_}`);
      if (!$link) return;

      let location = $link.getAttribute('href').split('#')[0];

      if (location == window.location.pathname) {
        event.preventDefault();
      } else {
        return;
      }

      let attr = $link.getAttribute('href').split('#')[1],
          $target = document.querySelector(`#${attr}`);
      
      if ($target) scroll_event($target);
    }

    let scroll_event = ($target) => {
      let top = $target.getBoundingClientRect().top + window.pageYOffset,
          gap = parseInt(getComputedStyle(document.documentElement)
            .getPropertyValue('--header-fixed-height')
            .replace(/[^\d.-]/g, '')),
          y = top - gap;

      window.dispatchEvent(new CustomEvent("scrollToAnchor"));

      $('html, body').animate({
        scrollTop: y
      }, 300);
    }

    document.addEventListener('click', click_event);
  }
}

export default ScrollTo;