class FormValidate {
  static FORM_FIELD = ".form-group";
  static ERROR_ITEM_CLASS_NAME = "error_item";
  static PARENT_ELEMENT_ERROR = "error";

  constructor(form) {
    this.sended = false;
    this.success = false;
    this.elements = form.elements;

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      this.sendForm();
    });
  }

  sendForm() {
    this.sended = true;
    const hasErrors = this.validateFields();

    if (hasErrors) {
      return;
    }

    this.success = true;

    const data = {
      action: form.action,
      method: form.method,
      formData: new FormData(form),
    };

    for (let value of data.formData) {
      console.log(value);
    }

    console.log(data);
  }

  validateFields() {
    let hasErrors = false;

    for (let i = 0; i < this.elements.length; i++) {
      const element = this.elements[i];
      const reqMessage = element.dataset.req;
      const emailMessage = element.dataset.email;
      const minMessage = element.dataset.min_message;
      this.clearError(element);

      if (reqMessage) {
        hasErrors = this.validateRequireField(element, reqMessage);
      }

      if (emailMessage) {
        hasErrors = this.validateEmail(element, emailMessage);
      }

      if (minMessage) {
        hasErrors = this.validateMinLength(element, minMessage);
      }
    }

    return hasErrors;
  }

  validateRequireField(element, message) {
    if (!element.value.length) {
      this.createError(element, message);

      return true;
    }
  }

  validateEmail(element, message) {
    const elementValue = element.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(elementValue)) {
      this.createError(element, message);

      return true;
    }
  }

  validateMinLength(element, message) {
    const minLength = element.dataset.min_length;
    const minLengthMessage = message.replace("{{N}}", minLength);
    if (element.value.length < minLength) {
      this.createError(element, minLengthMessage);

      return true;
    }
  }

  createError(element, message) {
    const parent = element.closest(FormValidate.FORM_FIELD);
    if (!parent.classList.contains(FormValidate.PARENT_ELEMENT_ERROR)) {
      const smallElement = document.createElement("small");
      smallElement.classList.add(FormValidate.ERROR_ITEM_CLASS_NAME);
      smallElement.textContent = message;
      parent.append(smallElement);
      parent.classList.add(FormValidate.PARENT_ELEMENT_ERROR);
    }
  }

  clearError(element) {
    const parent = element.closest(FormValidate.FORM_FIELD);

    if (
      parent &&
      parent.classList.contains(FormValidate.PARENT_ELEMENT_ERROR)
    ) {
      parent.classList.remove(FormValidate.PARENT_ELEMENT_ERROR);
      parent.querySelector(`.${FormValidate.ERROR_ITEM_CLASS_NAME}`).remove();
    }
  }
}

const formValidator = new FormValidate(document.querySelector(".js--reg_form"));
