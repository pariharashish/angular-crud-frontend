// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'angular-crud-frontend';
// }
import { Component } from '@angular/core';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmployeeListComponent],
  template: `
    <h1>Employee Management</h1>
    <app-employee-list></app-employee-list>
  `
})
export class AppComponent {}
