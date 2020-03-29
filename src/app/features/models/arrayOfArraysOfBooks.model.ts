import { ArrayResponse, GeneseModelEnvironment } from 'genese-angular';
import { Book } from '../../../../genese/genese-api/datatypes/book.datatype';


export class ArrayOfArraysOfBooks implements ArrayResponse {

    public gnArrayResponse?: Book[][] = [[new Book()]];
    public genese?: GeneseModelEnvironment = {
        path: '/array-response/array-of-arrays-of-books'
    };
}
