import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { BookService } from '../services/book.service';
import { CreateBookDTO } from '../dto/create-book.dto';
import { Book } from '../models/book.model';
import { GetAllResponse } from '../../generic/services/generic-data.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Category } from '../enums/category';
<<<<<<< Updated upstream
=======
import { BookPost } from '../../../../genese/genese-api/datatypes/book-post.datatype';
import { BookPut } from '../../../../genese/genese-api/datatypes/book-put.datatype';
>>>>>>> Stashed changes

@ApiTags('Books')
@Controller('books')
export class BookController {

    constructor(private booksService: BookService) { }


    @Get(':bookId')
    @ApiOperation({ summary: 'Get one book' })
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: Book,
    })
    async getBook(@Param('bookId') bookId, @Query() params) {
        const book = await this.booksService.getOne(bookId, params);
        return book;
    }



    @Get()
    @ApiOperation({ summary: 'Get all app' })
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
    @ApiOperation({ summary: 'Create a book' })
    @ApiQuery({name: 'category', enum: Category})
    async addBook(@Body() createBookDTO: CreateBookDTO) {
        const book = await this.booksService.addBook(createBookDTO);
        return book;
    }



    @Put(':bookId')
    @ApiOperation({ summary: 'Update a book' })
    async updateBook(@Param('bookId') bookId, @Body() bookPut: BookPut) {
        const book = await this.booksService.updateBook(bookId, bookPut);
        return book;
    }



    @Delete(':bookId')
    @ApiOperation({ summary: 'Delete a book' })
    async deleteBook(@Param('bookId') bookId) {
        const books = await this.booksService.deleteBook(bookId);
        return books;
    }
}
