const Dev = window.location.host == 'localhost:4000' ? true : false;

class Form {

  constructor($parent) {
    this.$parent = $parent;
  }

  init() {
    this.$form = this.$parent.querySelector('.welcome-form__element');
    this.$telegram = this.$parent.querySelector('#telegram');
    this.formFinal = this.$parent.querySelector('.welcome-form__final');

    this.submit = async () => {
      const formData = new FormData();
      const requestURL = this.$form.getAttribute('action');
      const requestOptions = {
        method: 'POST',
        body: formData,
      }
      
      formData.append('telegram', this.$telegram.value);
      
      const urlSearchParams = new URLSearchParams(window.location.search);
      const params = Object.fromEntries(urlSearchParams.entries());
      if (params.hasOwnProperty('utm_content')) {
        formData.append('utm_content', params.utm_content);
      }
      if (params.hasOwnProperty('add_name_parameter')) {
        formData.append('add_name_parameter', params.add_name_parameter);
      }

      const response = await fetch(requestURL, requestOptions);
      const data = await response.json();

      return data;
    }

    this.done = () => {
      party.confetti(this.$parent);
      this.$form.remove();
      this.formFinal.classList.add('active');
    }

    this.$form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (Dev) {
        this.done();
        return;
      }

      this.submit()
        .then(data => {
          if (data.result) {
            this.done();
          } else {
            console.error('Error:', data);
          }
        })

    })
  }
}

export default Form;