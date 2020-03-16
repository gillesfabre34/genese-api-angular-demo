import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeModule } from './demo/home/home.module';
import { GeneseModule } from 'genese-angular';
import { GeneseApiModule } from '../../genese-save/genese-api/genese-api.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        GeneseModule.forRoot(),
        GeneseApiModule.forRoot(),
        HomeModule,

        AppRoutingModule
    ],
    exports: [
        HttpClientModule
    ],
    providers: [HttpClient],
    bootstrap: [AppComponent]
})
export class AppModule { }
