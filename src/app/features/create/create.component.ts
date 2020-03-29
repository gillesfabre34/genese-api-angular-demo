import { Component } from '@angular/core';
import { GeneseRequestService } from '../../../../genese/genese-api/services/genese-request.service';
import { AuthorPost } from '../../../../genese/genese-api/datatypes/author-post.datatype';


@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent {

    public authorPost: AuthorPost = {firstname: 'Amartya', lastname: 'Sen'};

    constructor(
        private geneseService: GeneseRequestService,
    ) {}



    create() {
        this.geneseService.postAuthors(this.authorPost).subscribe((response: any) => {
            console.log('%c Genese create() response ', 'font-weight: bold; color: fuchsia;', response);
        });
    }

}
