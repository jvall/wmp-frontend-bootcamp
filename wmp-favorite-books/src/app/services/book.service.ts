import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Book } from '../models/book';

@Injectable()
export class BookService {
  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private _http: Http) { }

  searchBooks(queryTitle: string): Observable<Book[]> {
    return this._http.get(`${this.API_PATH}?q=${queryTitle}`)
      .map(res => res.json().items || [])
      .map(items => {
        return items.map(item => {
          return {
            id: item.id,
            title: item.volumeInfo.title,
            author: item.volumeInfo.authors[0],
            description: item.description || 'No description available',
            thumbnailUrl: (item.volumeInfo.imageLinks) ? item.volumeInfo.imageLinks.thumbnail : 'http://via.placeholder.com/100x100'
          };
        });
      });
  }
}