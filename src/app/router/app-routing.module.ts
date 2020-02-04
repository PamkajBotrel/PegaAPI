import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HelloWorldComponent } from '../hello-world/hello-world.component';
import { ActionFormComponent } from '../action-form/action-form.component';
const routes: Routes = [
    { path: 'hello-world', component: HelloWorldComponent},
    { path: 'action-form-test', component: ActionFormComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule {}