import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-herocard',
  templateUrl: './herocard.component.html',
  styleUrls: ['./herocard.component.css']
})
export class HerocardComponent implements OnInit {
@Input() name: string;

@Input() quote: string;
  constructor() { }

  ngOnInit(): void {
  }

}
