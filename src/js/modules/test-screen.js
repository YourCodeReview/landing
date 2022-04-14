import device from "current-device";

function checkScrollbar() {
  let testDiv = document.createElement('div');
  testDiv.style.cssText = `
    position: fixed;
    width: 100%;
    overflow: scroll;
  `;

  document.body.insertAdjacentElement('afterbegin', testDiv);

  const testWidth = testDiv.getBoundingClientRect().width;
  const value = testWidth - testDiv.clientWidth;

  testDiv.remove();

  //set scrollbar params
  document.documentElement.style.setProperty('--scrollbar-width-property', `${value}px`);
}

export default function() {
  if (device.ios()) {
    document.documentElement.style.setProperty('--window-safe-height-property', `${window.innerHeight}px`);
  }
  checkScrollbar();
}

