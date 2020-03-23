import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneseService } from 'genese-angular';
import { Book } from '../datatypes/book.datatype';

@Injectable()
export class GeneseRequestService {



	constructor(
		private http: HttpClient,
		private geneseService: GeneseService
		) {
		}



	getBooksByBookId(bookId: string): Observable<Book> {
		return this.geneseService.getGeneseInstance(Book).getOneCustom(`/books/${bookId}`) as Observable<Book>;
	}

}
