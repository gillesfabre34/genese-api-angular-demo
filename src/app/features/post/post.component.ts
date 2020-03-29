import { Component } from '@angular/core';
import { GeneseRequestService } from '../../../../genese/genese-api/services/genese-request.service';
import { BookPost } from '../../../../genese/genese-api/datatypes/book-post.datatype';


@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent {

    public bookPost: BookPost = {title: 'Les inégalités', description: 'Description des inégalités', year: '1998'};

    constructor(
        private geneseService: GeneseRequestService,
    ) {}



    create() {
        this.geneseService.postBooks(this.bookPost).subscribe((response: any) => {
            console.log('%c Genese post() response ', 'font-weight: bold; color: fuchsia;', response);
        });
    }

}
