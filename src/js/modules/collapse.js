import gsap from "./gsap";

class CollapseItem {
  constructor(elements, callback) {
    this.state = false;

    this.item = elements.item;
    this.button = elements.button;
    this.content = elements.content;

    this.animation = gsap.timeline({ paused: true })
      .slide(this.content)

    this.eventClick = () => {
      if (!this.state) {
        this.open();
      } else {
        this.close();
      }

      if (typeof(callback) === 'function') {
        callback();
      }
    }

    this.button.addEventListener('click', this.eventClick);
  }

  open() {
    this.state = true;
    this.animation.play();
    this.item.classList.add('active');
    this.button.classList.add('active');
  }

  close() {
    this.state = false;
    this.animation.reverse();
    this.item.classList.remove('active');
    this.button.classList.remove('active');
  }
}

class Collapse {
  constructor(element) {
    this.element = element;
  }

  init() {
    this.itemEl = this.element.querySelectorAll('[data-collapse="item"]');
    this.buttonEl = this.element.querySelectorAll('[data-collapse="button"]');
    this.contentEl = this.element.querySelectorAll('[data-collapse="content"]');
    this.itemInstances = [];

    this.itemEl.forEach((element, index) => {
      const elements = {
        item: element,
        button: this.buttonEl[index],
        content: this.contentEl[index]
      };

      const instance = new CollapseItem(elements, () => {
        for (const item of this.itemInstances) {
          if (item !== instance && item.state) {
            item.close();
          }
        }
      });

      this.itemInstances.push(instance);
    });
  }
}

export { CollapseItem, Collapse };