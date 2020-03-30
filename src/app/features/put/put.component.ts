import { Component, OnInit } from '@angular/core';
import { ResponseStatus } from '../../enums/response-status';
import { Book } from '../../../../genese/genese-api/datatypes/book.datatype';
import { GeneseRequestService } from '../../../../genese/genese-api/services/genese-request.service';
import { BookPut } from '../../../../genese/genese-api/datatypes/book-put.datatype';
import { ModalComponent } from '../../core/components/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
    selector: 'app-post',
    templateUrl: './put.component.html',
    styleUrls: ['./put.component.scss']
})
export class PutComponent implements OnInit {


    public data: any[] = [];


    constructor(
        private dialog: MatDialog,
        private geneseService: GeneseRequestService,
    ) {}



    ngOnInit(): void {
        this.getData();
    }


    openModal(id: string): void {
        console.log('%c Genese put() openModal id ', 'font-weight: bold; color: fuchsia;', id);
        this.geneseService.getBooksByBookId(id).subscribe((book: Book) => {
            console.log('%c Genese put() openModal book ', 'font-weight: bold; color: fuchsia;', book);
            const dialogRef = this.dialog.open(ModalComponent, {
                width: '600px',
                height: '50%',
                hasBackdrop: false,
                data: {book, mode: 'edition'}
            });

            dialogRef.afterClosed().subscribe(
                result => {
                    console.log('%c Genese put() afterClosed result ', 'font-weight: bold; color: fuchsia;', result);
                    this.getData();
                },
                err => console.error(err)
            );
        });
    }
    // this.geneseService.putBooksByBookId(id, this.bookPut).subscribe((response: ResponseStatus) => {
    //     console.log('%c Genese openModal response ', 'font-weight: bold; color: fuchsia;', response);
    //     this.getData();
    // });
    // }


    getData(): void {
        this.geneseService.getBooks()
            .subscribe((response: Book[]) => {
                // console.log('%c getAll response ', 'font-weight: bold; color: black;', response);
                this.data = response;
            });
    }


}
