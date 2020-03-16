import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genese, GeneseEnvironmentService, GeneseService } from 'genese-angular';
import { Book } from '../dtos/schemas/book.dto';

@Injectable()
export class BooksService {




	constructor(
		private http: HttpClient,
		private geneseEnvironmentService: GeneseEnvironmentService,
		private geneseService: GeneseService,
		) {
		}




	getAllBooks(): Observable<Book[]> {
		return this.geneseService.getGeneseInstance(Book).getAllCustom('/books') as any;
	}


}
