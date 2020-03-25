import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { Genese, GeneseService } from 'genese-angular';
import { GeneseRequestService } from '../../../../genese/genese-api/services/genese-request.service';


@Component({
    selector: 'app-get-all',
    templateUrl: './get-all.component.html',
    styleUrls: ['./get-all.component.scss']
})
export class GetAllComponent implements OnInit {

    // --------------------------------------------------
    //                     PROPERTIES
    // --------------------------------------------------



    // --------------------------------------------------
    //                     CONSTRUCTOR
    // --------------------------------------------------

    constructor(
        private geneseService: GeneseRequestService,
    ) {
    }



    ngOnInit(): void {
        this.getData();
    }


    getData(): void {
        this.geneseService.getBooks()
            .subscribe((response: any) => {
                console.log('%c getAll response ', 'font-weight: bold; color: black;', response);
                // this.data = response;
            });
    }
}
