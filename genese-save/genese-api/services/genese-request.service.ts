import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneseEnvironmentService, GeneseService } from 'genese-angular';
import { Book } from '../dtos/book.dto';
import { BooksService } from './books.service';


@Injectable({
    providedIn: 'root'
})
export class GeneseRequestService {

    getAllBooks: () => Observable<Book[]>;

    constructor(
        private http: HttpClient,
        private geneseEnvironmentService: GeneseEnvironmentService,
        private geneseService: GeneseService,
        private booksService: BooksService
    ) {
        this.init();
    }

    init() {
        this.getAllBooks = this.booksService.getAllBooks;
    }
}
