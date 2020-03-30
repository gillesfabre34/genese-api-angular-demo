import { HttpException, Injectable } from '@nestjs/common';
import { BOOKS } from '../mocks/book.mock';
import { Book } from '../models/book.model';
import { GenericDataService } from '../../generic/services/generic-data.service';
import chalk from 'chalk';
import { BookPost } from '../../../../genese/genese-api/datatypes/book-post.datatype';

@Injectable()
export class BookService extends GenericDataService<Book> {
    books = BOOKS;


    /**
     * Create a new book
     * @param bookPost
     */
    addBook(bookPost: BookPost): Promise<any> {
        return new Promise(resolve => {
            const book = new Book();
            book.id = this.getNewId();
            book.description = bookPost.description;
            book.title = bookPost.title;
            book.year = bookPost.year;
            this.books.push(book);
            resolve(this.books);
        });
    }


    /**
     * Delete a book
     * @param bookID
     */
    deleteBook(bookID): Promise<any> {
        const id = Number(bookID);
        return new Promise(resolve => {
            const index = this.books.findIndex(book => book.id === id);
            if (index === -1) {
                throw new HttpException('Book does not exist!', 404);
            }
            this.books.splice(index, 1);
            resolve(this.books);
        });
    }



    getNewId(): number {
        const newId = Math.max(...this.books.map(e => e.id)) + 1;
        console.log('newId', newId);
        return newId;
    }
}

