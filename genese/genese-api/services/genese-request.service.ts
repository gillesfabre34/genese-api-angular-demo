import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneseEnvironmentService } from 'genese-angular';



@Injectable()
export class GeneseRequestService {

    constructor(
        private http: HttpClient,
        private geneseEnvironmentService: GeneseEnvironmentService,
    ) {
        this.init();
    }
    public getOneBooks: () => Observable<Book>;




    init(): void {

        this.getAllBooks = this.booksService.getAllBooks;
        this.getOneBooks = this.booksBookIdService.getOneBooks;
    }


}
