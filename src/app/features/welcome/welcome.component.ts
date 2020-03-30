import { Component, OnInit } from '@angular/core';
import { Book } from '../../../../genese/genese-api/datatypes/book.datatype';
import { GeneseRequestService } from '../../../../genese/genese-api/services/genese-request.service';


@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {


    constructor(
        private geneseService: GeneseRequestService,
    ) {}

    ngOnInit(): void {
        this.getOne('1');
    }

    /**
     * Get one book for a given id
     * @param id
     */
    getOne(id: string): void {
        this.geneseService.getBooksByBookId(id).subscribe((book: Book) => {
            console.log('%c Get one book ', 'font-weight: bold; color: green;', book);
        });
    }
}
