import { Author } from './author.datatype';
import { CodeNumberAndString } from './code-number-and-string.datatype';
import { Edition } from './edition.datatype';
import { Editor } from './editor.datatype';
import { Category } from './category.datatype';

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
