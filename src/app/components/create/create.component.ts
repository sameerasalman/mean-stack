import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  constructor(private taskService: TaskService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      taskName: ['', Validators.required],
      Description: ['', Validators.required],
      Completed: ''
    });
  }

  addTask(taskName, Description, Completed) {
    this.taskService.addTask(taskName, Description, Completed).subscribe(() => {
      this.router.navigate(['/task'])
    })
  }

  ngOnInit(): void {}

}
