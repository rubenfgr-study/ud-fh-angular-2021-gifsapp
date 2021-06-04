import { Component, OnInit } from '@angular/core';
import { Gif } from '../interface/gifs-search.interface';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styles: [],
})
export class ResultComponent implements OnInit {
  get results(): Gif[] {
    return this.gifsService.result;
  }

  constructor(private gifsService: GifsService) {}

  ngOnInit(): void {}
}
