import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.scss']
})
export class MineComponent implements OnInit {

  @Input() i: number;
  @Input() j: number;
  @Input() danger = 0;
  @Input() mine = false;
  @Input() revealed = false;

  constructor() { }

  ngOnInit() { }

}
