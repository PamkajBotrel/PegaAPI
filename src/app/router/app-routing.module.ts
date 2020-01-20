import { Routes, RouterModule } from '@angular/router';
import { CaseTypeComponent } from '../case-type/case-type.component';
import { NgModule } from '@angular/core';
import { CreateCaseComponent } from '../create-case/create-case.component';

const routes: Routes = [
    { path: 'casetypes', component: CaseTypeComponent},
    { path: '', component: CaseTypeComponent},
    { path: 'casetest', component: CreateCaseComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule {}