import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HelloWorldComponent } from '../hello-world/hello-world.component';
import { ActionFormComponent } from '../action-form/action-form.component';
import { CaseWizardComponent } from '../case-wizard/case-wizard.component';

const routes: Routes = [
    { path: 'hello-world', component: HelloWorldComponent},
    { path: 'action-form-test', component: ActionFormComponent},
    { path: 'case-wizard', component: CaseWizardComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule {}