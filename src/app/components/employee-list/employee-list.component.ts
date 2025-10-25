import { Component } from '@angular/core';
import { Employee, EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent {
  employees: Employee[] = [];
  editingId: number | null = null; // track which row is being edited
  editedEmployee: Employee = { name: '', email: '', department: '',gender:'' }; // temp copy for editing
  newEmployee: Employee = { name: '', email: '', department: '' ,gender:''};
  constructor(private service: EmployeeService) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.service.getAll().subscribe(data => this.employees = data);
  }


  addEmployee() {
    this.service.create(this.newEmployee).subscribe(() => {
      this.loadEmployees();
      this.newEmployee = { name: '', email: '', department: '',gender:'' };
    });
  }

  startEdit(emp: Employee) {
    this.editingId = emp.id!;
    this.editedEmployee = { ...emp }; // clone to avoid directly modifying table
  }

  saveEdit() {
    if (this.editingId !== null) {
      this.service.update(this.editingId, this.editedEmployee)
        .subscribe(() => {
          this.loadEmployees();
          this.cancelEdit();
        });
    }
  }

  cancelEdit() {
    this.editingId = null;
    this.editedEmployee = { name: '', email: '', department: '' ,gender:''};
  }

  deleteEmployee(id: number) {
    this.service.delete(id).subscribe(() => this.loadEmployees());
  }
}
