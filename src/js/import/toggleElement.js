class ToggleElement {

  constructor($parent) {
    this.$parent = $parent;
  }

  init() {
    this.$trigger = this.$parent.querySelector('[data-toggle="trigger"]');
    this.$block = this.$parent.querySelector('[data-toggle="content"]');

    this.$trigger.addEventListener('click', () => {
      let state = this.$parent.classList.contains('is-active');

      if(!state) this.open();
      else this.close();
    })
  }

  open() {
    for(let $el of [this.$parent, this.$trigger, this.$block]) {
      $el.classList.add('is-active')
    }
    $(this.$block).slideDown(150);
  }

  close() {
    for(let $el of [this.$parent, this.$trigger, this.$block]) {
      $el.classList.remove('is-active')
    }
    $(this.$block).slideUp(150);
  }

}

export default ToggleElement;