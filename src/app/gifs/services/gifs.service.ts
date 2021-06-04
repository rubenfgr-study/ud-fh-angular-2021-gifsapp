import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs-search.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = '3VsaeQ2V9TX9hwZftQRAaG1ldcWKJXhm';
  private _history: string[] = [];

  public result: Gif[] = [];

  get history() {
    return [...this._history];
  }

  constructor(private http: HttpClient) {
    const historyJSON = localStorage.getItem('history');
    if (historyJSON) {
      const history = JSON.parse(historyJSON);
      this._history = history;
    }
    const resultsJSON = localStorage.getItem('results');
    if (resultsJSON) {
      const results = JSON.parse(resultsJSON);
      this.result = results;
    }

  }

  searchGifs(query: string) {
    query = query.trim().toLocaleLowerCase();
    if (!this._history.includes(query) && query !== '') {
      this._history.unshift(query);
    }
    if (this._history.length >= 11) {
      this._history.pop();
    }

    localStorage.setItem('history', JSON.stringify(this._history));

    this.http
      .get<SearchGifsResponse>(
        `http://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`
      )
      .subscribe((res) => {
        console.log(res);
        this.result = res.data;
        localStorage.setItem('results', JSON.stringify(this.result));
      });
  }
}
