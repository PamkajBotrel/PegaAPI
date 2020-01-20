import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { CaseTypeComponent } from './case-type/case-type.component';
import { Logger } from './router/logger.interceptor';
import { BasicAuthInterceptor } from './router/basic-auth.interceptor';
import { CreateCaseComponent } from './create-case/create-case.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { CaseWizardComponent } from './case-wizard/case-wizard.component';
import { MapperComponent } from './mapper/mapper.component';


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        CommonModule
    ],
    declarations: [
        AppComponent,
        CaseTypeComponent,
        CreateCaseComponent,
        DynamicFormComponent,
        CaseWizardComponent,
        MapperComponent,
    ],
    providers: [
      {provide: HTTP_INTERCEPTORS, useClass: Logger, multi:true},
      {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi:true},
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }