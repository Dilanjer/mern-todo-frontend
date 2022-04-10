import $api from 'http';

export default class AuthService {
  static async login(email, password) {
    return await $api.post('/auth/login', { email, password });
  }

  static async registration(name, email, password) {
    return await $api.post('/auth/registration', { name, email, password });
  }

  static async logout() {
    return await $api.post('/auth/logout');
  }
}
