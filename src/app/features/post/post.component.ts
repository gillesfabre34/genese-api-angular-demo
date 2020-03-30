import { Component, OnInit } from '@angular/core';
import { GeneseRequestService } from '../../../../genese/genese-api/services/genese-request.service';
import { BookPost } from '../../../../genese/genese-api/datatypes/book-post.datatype';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../core/components/modal/modal.component';
import { Book } from '../../../../genese/genese-api/datatypes/book.datatype';


@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

    public bookPost: BookPost = {title: 'Les inégalités', description: 'Description des inégalités', year: '1998'};
    public data: any[] = [];

    constructor(
        private dialog: MatDialog,
        private geneseService: GeneseRequestService,
    ) {}



    ngOnInit(): void {
        this.getData();
    }



    getData(): void {
        this.geneseService.getBooks()
            .subscribe((response: Book[]) => {
                console.log('%c getAll response ', 'font-weight: bold; color: black;', response);
                this.data = response;
            });
    }



    create() {
        const data = {
            book: {},
            mode: 'creation'
        };
        const dialogRef = this.dialog.open(ModalComponent, {
            width: '400px',
            height: '40%',
            hasBackdrop: false,
            panelClass: 'modal',
            data
        });

        dialogRef.afterClosed().subscribe(
            result => {
                console.log('%c Genese post() afterClosed result ', 'font-weight: bold; color: fuchsia;', result);
                if (result) {
                    this.geneseService.postBooks(this.bookPost).subscribe((response: any) => {
                        console.log('%c Genese post() response ', 'font-weight: bold; color: fuchsia;', response);
                    });
                }
            },
            err => console.error(err)
        );
    }



    /**
     * Open create part modal
     */
    openModal(): void {
        const dialogRef = this.dialog.open(ModalComponent, {
            width: '800px',
            height: '80%',
            hasBackdrop: false,
            panelClass: 'detail-part-modal'
        });

        dialogRef.afterClosed().subscribe(
            result => {
                console.log('%c openModal result', 'font-weight: bold; color: blue;', result);
                this.getData();
            },
            err => console.error(err)
        );
    }

}
