import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from '../../task.model';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: String;
  task: any = {};
  updateForm : FormGroup;

  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) {
    this.createForm();
   }

   createForm() {
    this.updateForm = this.fb.group({
      taskName: ['', Validators.required],
      Description: ['', Validators.required],
      Completed: ''
    });

   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.taskService.getTaskById(this.id).subscribe(res => {
        this.task = res;
        this.updateForm.get('taskName').setValue(this.task.taskName);
        this.updateForm.get('Description').setValue(this.task.Description);
        this.updateForm.get('Completed').setValue(this.task.Completed);
      });
    });
  }

  updateTask(taskName, Description, Completed) {
    this.taskService.updateTask(this.id, taskName, Description, Completed).subscribe(() => {
      this.snackBar.open('Task updated successfully!', 'OK', {
        duration: 3000
      })
    })
  }
}
