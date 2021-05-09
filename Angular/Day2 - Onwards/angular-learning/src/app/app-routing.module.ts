import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { QuantityIncrementComponent } from './quantity-increment/quantity-increment.component';
import { EditEmpTemplateDrivenComponent } from './edit-emp-template-driven/edit-emp-template-driven.component';
import { EditEmpReactiveComponent } from './edit-emp-reactive/edit-emp-reactive.component';
import { EditEmpFormBuilderComponent } from './edit-emp-form-builder/edit-emp-form-builder.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../app/auth/auth.guard';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'view-emp', component: ViewEmpComponent},
  {path: 'edit-emp', component: EditEmpComponent},
  {path: 'quantity-increment', component: QuantityIncrementComponent},
  {path: 'edit-emp-template-driven', component: EditEmpTemplateDrivenComponent},
  {path: 'edit-emp-reactive', component: EditEmpReactiveComponent, canActivate: [AuthGuard]},
  {path: 'edit-emp-form-builder', component: EditEmpFormBuilderComponent},
  {path: 'employee-list', component: EmployeeListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
