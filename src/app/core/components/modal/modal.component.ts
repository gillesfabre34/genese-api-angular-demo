import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GeneseRequestService } from '../../../../../genese/genese-api/services/genese-request.service';
import { Book } from '../../../../../genese/genese-api/datatypes/book.datatype';

@Component({
    selector: 'app-part-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {


    public mode = 'creation';
    public book: Book = {};


    constructor(@Inject(MAT_DIALOG_DATA) data: { book: Book, mode: string },
                private dialogRef: MatDialogRef<ModalComponent>,
                private geneseService: GeneseRequestService) {
        this.book = data ? data.book : this.book;
        this.mode = data ? data.mode : 'creation';
    }



    /**
     * Component initialization
     */
    ngOnInit() {
        const overlay = document.createElement('div');
        overlay.id = 'overlay';
        document.body.prepend(overlay);
    }



    /**
     * Modal validation
     */
    validModal() {
        if (this.mode === 'creation') {
            console.log('%c validModal this.book', 'font-weight: bold; color: blue;', this.book);
            this.geneseService.postBooks(this.book)
                .subscribe((book: Book) => {
                    this.removeOverlay();
                    this.dialogRef.close(book);
                }, err => console.error(err));
        } else {
            this.geneseService.putBooksByBookId(this.book.id.toString(),
                {
                    title: this.book.title,
                    description: this.book.description
                })
                .subscribe(() => {
                    this.removeOverlay();
                    this.dialogRef.close(true);
                }, err => console.error(err));
        }
    }


    /**
     * Close modal without saving
     */
    closeModal() {
        this.removeOverlay();
        this.dialogRef.close();
    }

    /**
     * Remove overlay
     */
    removeOverlay(): void {
        document.body.firstChild.remove();
    }
}
