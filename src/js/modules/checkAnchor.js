const checkAnchor = function() {
  let anchor = window.location.hash;
  if (!anchor) return;

  let $target = document.querySelector(`${anchor}`);
  if (!$target) return;

  setTimeout(() => {
    let top = $target.getBoundingClientRect().top + window.pageYOffset,
        gap = parseInt(getComputedStyle(document.documentElement)
          .getPropertyValue('--header-fixed-height')
          .replace(/[^\d.-]/g, '')),
        y = top - gap;

    window.scrollTo(0, y);
  }, 0);
}

export default checkAnchor;