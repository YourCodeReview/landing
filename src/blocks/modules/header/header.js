const Header = {
  init: function() {
    this.$element = document.querySelector('#header');
    this.$hamburger = document.querySelector('.hamburger');
    this.$mobileNav = document.querySelector('.header-mobile');
    this.$mobileItems = document.querySelectorAll('.header-mobile__nav-item');

    this.checkState = () => {
      let _fixedClass_ = 'header_fixed',
          isFixed = this.$element.classList.contains(_fixedClass_);
          

      if (window.pageYOffset > 0 && !isFixed) {
        this.$element.classList.add(_fixedClass_);
      } else if (window.pageYOffset <= 0 && isFixed) {
        this.$element.classList.remove(_fixedClass_);
      }
    }

    this.openMobileNav = () => {
      this.mobileNavState = true;
      this.$hamburger.classList.add('is-active');
      this.$mobileNav.classList.add('opened');
      this.$mobileItems.forEach($this => {
        $this.classList.add('animate');
      })
      scrollLock.disablePageScroll();
    }

    this.closeMobileNav = () => {
      this.mobileNavState = false;
      this.$hamburger.classList.remove('is-active');
      this.$mobileNav.classList.remove('opened');
      this.$mobileItems.forEach($this => {
        $this.classList.remove('animate');
      })
      scrollLock.enablePageScroll();
    }

    this.$hamburger.addEventListener('click', () => {
      if (!this.mobileNavState) {
        this.openMobileNav();
      } else {
        this.closeMobileNav();     
      }
    })

    window.addEventListener('scrollToAnchor', () => {
      if (this.mobileNavState) {
        this.closeMobileNav();
      }
    })

    this.checkState();
    window.addEventListener('scroll', this.checkState);
  }
}

export default Header;