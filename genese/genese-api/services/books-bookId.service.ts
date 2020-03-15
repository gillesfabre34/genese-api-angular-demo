import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genese, GeneseEnvironmentService, GeneseService } from 'genese-angular';
import { Book } from '../dtos/schemas/book.dto';

@Injectable()
export class BooksBookIdService {




	constructor(
		private http: HttpClient,
		private geneseEnvironmentService: GeneseEnvironmentService,
		private geneseService: GeneseService,
		) {
		}




	getOneBooks(): Observable<Book> {
		return this.geneseService.getGeneseInstance(Book).getOneCustom('/books/{bookId}') as any;
	}


}
