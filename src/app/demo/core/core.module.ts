import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MaterialModule } from './modules/material.module';
import { AppRoutingModule } from '../../app-routing.module';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
    ],
    entryComponents: [],
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        MaterialModule,

        AppRoutingModule
    ],
    exports: [
        CommonModule,
        MaterialModule,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: []
})
export class CoreModule {}
