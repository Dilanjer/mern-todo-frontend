import $api from 'http';

export default class TaskService {
  static async createTask(title, listId) {
    return await $api.post('/task/create', { title, listId });
  }

  static async getAllUserTaskByListId(listId) {
    return await $api.post('/task/allbyid', { listId });
  }
}
