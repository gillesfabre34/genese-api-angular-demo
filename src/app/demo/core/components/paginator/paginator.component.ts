import { MatPaginatorIntl } from '@angular/material/paginator';
import { Injectable } from '@angular/core';

@Injectable()
export class PaginatorComponent extends MatPaginatorIntl {
    itemsPerPageLabel = '';
    nextPageLabel = '';
    previousPageLabel = '';

    /**
     * Translate the range label of the paginator
     * @param page
     * @param pageSize
     * @param length
     */
    getRangeLabel = function(page, pageSize, length) {
        if (length === 0 || pageSize === 0) {
            return this.translate.instant('PAGINATOR.RANGE_PAGE_LABEL_1', {length});
        }
        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        // If the start index exceeds the list length, do not try and fix the end index to the end.
        const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return this.translate.instant('PAGINATOR.RANGE_PAGE_LABEL_2', {
            startIndex: startIndex + 1,
            endIndex,
            length
        });
    };

}
