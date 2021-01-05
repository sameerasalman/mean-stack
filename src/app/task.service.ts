import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url =  'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get(`${this.url}/tasks`);
  }

  getTaskById(id) {
    return this.http.get(`${this.url}/tasks/${id}`);
  }

  addTask(taskName, Description, Completed) {
    const task = {
      taskName: taskName,
      Description: Description,
      Completed: Completed
    };
    return this.http.post(`${this.url}/tasks/add`, task);
  }

  updateTask(id,taskName, Description, Completed) {
    const task = {
      taskName: taskName,
      Description: Description,
      Completed: Completed
    };
    return this.http.post(`${this.url}/tasks/update/${id}`, task);
  }

  deleteTask(id) {
    return this.http.get(`${this.url}/tasks/delete/${id}`)
  }
}
