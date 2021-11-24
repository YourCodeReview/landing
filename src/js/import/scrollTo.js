const ScrollTo = {
  init: function() {
    let _scroll_ = '[data-action="scroll"]';

    let click_event = (event) => {
      let $link = event.target.closest(`${_scroll_}`);

      if (!$link) return;

      event.preventDefault();

      let attr = $link.getAttribute('href').replace(/[/]/g, ''),
          $target = document.querySelector(`${attr}`);

      if (!$target) return;

      scroll_event($target);
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