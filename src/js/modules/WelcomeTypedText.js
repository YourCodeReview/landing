import Typed from 'typed.js';

export default class {
  constructor(element) {
    this._selector = '.' + element.className.split(' ')[0];
    this._options = {
      strings: [
        '<span class="welcome-typed-text welcome-typed-text_yandex">Yandex</span>',
        '<span class="welcome-typed-text welcome-typed-text_ozon">OZON</span>',
        '<span class="welcome-typed-text welcome-typed-text_tinkoff">Tinkoff</span>',
        '<span class="welcome-typed-text welcome-typed-text_sber">SBER</span>',
        '<span class="welcome-typed-text welcome-typed-text_vk">VK</span>',
        '<span class="welcome-typed-text welcome-typed-text_epam"><span><</span>epam<span>></span></span>',
        '<span class="welcome-typed-text welcome-typed-text_avito">Avito</span>',
        '<span class="welcome-typed-text welcome-typed-text_mail">@mail.ru</span>'
      ],
      typeSpeed: 75,
      backSpeed: 50,
      backDelay: 750,
      loop: true
    };
  }
  init() {
    this._typedInstance = new Typed(this._selector, this._options);
  }
}