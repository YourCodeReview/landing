import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { sDur } from './animation-duration';

gsap.registerPlugin(ScrollToPlugin);

gsap.defaults({
  ease: "power2.inOut",
  duration: 1
});

//animations
gsap.registerEffect({
  name: "fadeIn",
  effect: ($element, config) => {
    return gsap.fromTo($element, {autoAlpha: 0}, {immediateRender: false, autoAlpha: 1, duration: config.duration || sDur[1],
      onStart: () => {
        $element.forEach($this => {
          $this.classList.add('d-block');
        })
      },
      onReverseComplete: () => {
        gsap.set($element, {clearProps: "all"});
        $element.forEach($this => {
          $this.classList.remove('d-block');
        })
      }
    })
  },
  extendTimeline: true
});

gsap.registerEffect({
  name: "slide",
  effect: ($element, config) => {
    return gsap.fromTo($element, 
      { css: { height: '0px' } }, 
      { css: { height: 'auto'}, duration: config.duration || sDur[1] })
  },
  extendTimeline: true
});

export default gsap;