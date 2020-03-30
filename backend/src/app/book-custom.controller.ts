import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import chalk from 'chalk';
import { BookService } from './services/book.service';
import { GetAllResponse } from '../generic/services/generic-data.service';
import { Book } from './models/book.model';
import { ApiTags } from '@nestjs/swagger';
import { BookPost } from '../../../genese/genese-api/datatypes/book-post.datatype';

@ApiTags('custom path')
@Controller('custom-path')
export class BookCustomController {
    constructor(private booksService: BookService) { }

    @Get(':bookId')
    async getBook(@Param('bookId') bookId, @Query() params) {
        const book = await this.booksService.getOne(bookId, params);
        return book;
    }

    @Get()
    async getBooks(@Query() params): Promise<GetAllResponse<Book> | Book[]> {
        let books = [];
        if (params && params.pSize) {
            books = await this.booksService.getAllWithPagination(params);
        } else {
            books = await this.booksService.getAll(params);
        }
        return books;
    }

    @Post()
    async addBook(@Body() bookPost: BookPost) {
        const book = await this.booksService.addBook(bookPost);
        return book;
    }

    @Delete(':bookId')
    async deleteBook(@Param('bookId') bookId) {
        const books = await this.booksService.deleteBook(bookId);
        return books;
    }
}
