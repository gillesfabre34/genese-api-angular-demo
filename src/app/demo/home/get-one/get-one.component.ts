import { Component, OnInit } from '@angular/core';
import { GeneseRequestService } from '../../../../../genese/genese-api/services/genese-request.service';


@Component({
    selector: 'app-get-one',
    templateUrl: './get-one.component.html',
    styleUrls: ['./get-one.component.scss']
})
export class GetOneComponent implements OnInit {



    // --------------------------------------------------
    //                     CONSTRUCTOR
    // --------------------------------------------------

    constructor(
        // private geneseService: GeneseService,
        private geneseRequestService: GeneseRequestService
    ) {
        // this.booksGenese = geneseService.getGeneseInstance(Book);
        // this.arrayOfArraysOfStringsGenese = geneseService.getGeneseInstance(ArrayOfArraysOfStrings);
    }

    ngOnInit(): void {
        this.getOne('1');
    }

    /**
     * Get one book for a given id
     * @param id
     */
    getOne(id: string): void {
        this.geneseRequestService.getAllBooks().subscribe((book: any[]) => {
            console.log('%c Get one book ', 'font-weight: bold; color: green;', book);
        });
        // this.booksGenese.getOne(id).subscribe((book: Book) => {
        //     console.log('%c Get one book ', 'font-weight: bold; color: green;', book);
        // });
    }
}
