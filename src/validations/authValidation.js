const authValidation = {
  name: {
    required: 'You need to enter your name.',
  },
  email: {
    required: 'You need to enter your email.',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Invalid email address',
    },
    minLength: {
      value: 5,
      message: 'Email must be between 5 and 40 characters.',
    },
    maxLength: {
      value: 40,
      message: 'Email must be between 5 and 40 characters.',
    },
    validate: () => {},
  },
  password: {
    required: 'You need to enter your password.',
    minLength: {
      value: 6,
      message: 'Your password must be at least 6 characters',
    },
  },
  confirmPassowrd: {
    required: 'You need to enter your password again.',
    validate: () => {},
  },
  setEmailValidateParam(param) {
    if (typeof param !== 'function') this.email.validate = () => {};
    this.email.validate = param;
  },
  setConfirmPassowrdValidateParam(param) {
    if (typeof param !== 'function') this.confirmPassowrd.validate = () => {};
    this.confirmPassowrd.validate = param;
  },
};

export default authValidation;
