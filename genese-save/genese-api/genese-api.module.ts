import { ModuleWithProviders, NgModule } from '@angular/core';
import { BooksService } from './services/books.service';
import { GeneseRequestService } from './services/genese-request.service';


@NgModule({
    declarations: [],
    imports: [
    ],
    providers: [
        BooksService,
        GeneseRequestService
    ],
    exports: [],
})
export class GeneseApiModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: GeneseApiModule,
            providers: [GeneseRequestService]
        };
    }
}