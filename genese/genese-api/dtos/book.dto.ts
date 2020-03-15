import { Category } from './category.dto';
import { Editor } from './editor.dto';
import { Edition } from './edition.dto';
import { CodeNumberAndString } from './codenumberandstring.dto';
import { Author } from './author.dto';

export class Book {

    public id ?= 0;
    public author ?= new Author();
    public available ?= false;
    public title ?= '';
    public codeArrayOfArraysOfStrings ?= [''];
    public codeArrayOfArraysOfObjects ?= [new CodeNumberAndString()];
    public codeNumbers ?= [0];
    public description ?= '';
    public editions ?= [new Edition()];
    public editor ?= new Editor();
    public librariesClassification ?= '';
    public librariesRate ?= 0;
    public year ?= '';
    public categories ?= [new Category()];

}
