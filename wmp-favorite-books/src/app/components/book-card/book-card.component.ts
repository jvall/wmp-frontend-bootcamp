import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  book: Book = {
    title: 'Harry Potter',
    author: 'JK Rowling',
    description: 'You\'re a wizard Harry',
    thumbnailUrl: 'http://books.google.com/books/content?id=Sm5AKLXKxHgC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
    isFavorited: true
  };

  constructor() { }

  ngOnInit() {
  }

}
