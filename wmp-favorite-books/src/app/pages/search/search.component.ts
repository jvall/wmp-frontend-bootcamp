import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  searchResults: Book[] = [];
  private _searchTermStream$: Subject<string>;
  private _searchTermSub: Subscription;

  constructor(private _bookService: BookService) { }

  ngOnInit() {
    this._searchTermStream$ = new Subject<string>();

    this._searchTermSub = this._searchTermStream$
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(titleSearch => this._bookService.searchBooks(titleSearch))
      .subscribe(results => {
        this.searchResults = results;
      });
  }

  ngOnDestroy() {
    this._searchTermSub.unsubscribe();
  }

  searchForBook(title: string): void {
    if (title !== '') {
      this._searchTermStream$.next(title);
    }
  }
}
