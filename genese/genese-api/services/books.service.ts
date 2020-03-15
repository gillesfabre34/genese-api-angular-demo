import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genese, GeneseEnvironmentService, GeneseService } from 'genese-angular';
import { Book } from '../dtos/book.dto';
// import { Book } from '../dtos/schemas/book.dto';

@Injectable({
    providedIn: 'root'
})
export class BooksService {




    constructor(
        private http: HttpClient,
        private geneseEnvironmentService: GeneseEnvironmentService,
        private geneseService: GeneseService,
    ) {
    }




    getAllBooks(): Observable<Book[]> {
        console.log('%c getAllBooks this.geneseService', 'font-weight: bold; color: green;', this.geneseService);
        return this.geneseService.getGeneseInstance(Book).getAllCustom('/books') as any;
    }


}
