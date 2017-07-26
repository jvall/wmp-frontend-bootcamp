import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResults: Book[] = [];

  constructor(private _bookService: BookService) { }

  ngOnInit() {
  }

  searchForBook(title: string): void {
    this._bookService.searchBooks(title).subscribe((results) => {
      this.searchResults = results;
    });
  }
}
