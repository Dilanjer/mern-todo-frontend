import $api from 'http';

export default class ListService {
  static async getAllUserLists() {
    return await $api.get('/list/all');
  }

  static async createList(title) {
    return await $api.post('/list/create', { title });
  }
  static async updateList(listId) {
    return await $api.patch('/list/update', { listId });
  }
}
