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

    // getAllBooks: () => Observable<Book[]>;

    constructor(
        private http: HttpClient,
        private geneseEnvironmentService: GeneseEnvironmentService,
        private geneseService: GeneseService,
        private booksService: BooksService
    ) {
        // console.log('%c init this.booksService', 'font-weight: bold; color: blue;', this.booksService);
        // this.getAllBooks = this.booksService.getAllBooks;
        // console.log('%c init this.getAllBooks', 'font-weight: bold; color: blue;', this.getAllBooks);
        // this.init();
    }

    getAllBooks(): Observable<Book[]> {
        console.log('%c getAllBooks this.geneseService', 'font-weight: bold; color: green;', this.geneseService);
        return this.geneseService.getGeneseInstance(Book).getAllCustom('/books');
    }




    init(): void {
        console.log('%c init this.booksService', 'font-weight: bold; color: blue;', this.booksService);
        this.getAllBooks = this.booksService.getAllBooks;
        // this.getOneBooks = this.booksBookIdService.getOneBooks;
    }


}
