import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table/table-data-source';
import { Task } from '../../task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Task[];
  displayedColumns = ['taskName', 'Description', 'Completed'];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks() {
    this.taskService.getTasks().subscribe((data: Task[]) => {
      this.tasks = data;
      console.log('Data requested...');
      console.log(this.tasks);
    })
  }

  editTask(id) {
    this.router.navigate([`/edit/${id}`])
  }

  deleteTask(id) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.fetchTasks();
    });
  }

}
