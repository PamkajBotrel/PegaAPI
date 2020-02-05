import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ActionFormComponent } from './action-form/action-form.component';
import { AppComponent } from './app.component';
import { CaseWizardComponent } from './case-wizard/case-wizard.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { AppRoutingModule } from './router/app-routing.module';
import { PegaApiService } from './services/pega-api.service';
import { CaseWizardModule } from './case-wizard/case-wizard.module';
@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        CommonModule,
        FormsModule,
        CaseWizardModule
    ],
    declarations: [
        AppComponent,
        HelloWorldComponent,
        ActionFormComponent,
    ],
    providers: [
        PegaApiService
      /* {provide: HTTP_INTERCEPTORS, useClass: Logger, multi:true},
      {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi:true},
     */],
    bootstrap: [AppComponent]
})
export class AppModule { }