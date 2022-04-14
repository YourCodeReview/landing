import device from "current-device";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));

export default class {
  constructor(element) {
    this.El = element;
  }

  init() {
    const videoEl = this.El.querySelector('video');
    const videoPath = this.El.getAttribute('href');

    this.El.addEventListener('click', (event) => {
      event.preventDefault();

      Fancybox.show(
        [{
          src: videoPath,
          type: "video",
          width: 420,
          height: 645
        }], {
          closeButton: 'outside',
          mainClass: 'vertical-video-modal'
        }
      );
    })

    if (device.desktop() && !isSafari) {
      this.El.addEventListener('mouseenter', () => {
        videoEl.play();
      })
      this.El.addEventListener('mouseleave', () => {
        videoEl.currentTime = 0;
        videoEl.pause();
      })
    }

    else {
      this.El.classList.add('video-preview_no-video');
    }
  }
}