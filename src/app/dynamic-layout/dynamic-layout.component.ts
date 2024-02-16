import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-layout.component.html',
  styleUrls: ['./dynamic-layout.component.scss']
})
export class DynamicLayoutComponent implements OnInit {

  @Input() columns: number | undefined;

  constructor() { }

  ngOnInit() {
  }

  // Utility method to generate an array of column indices
  get columnsArray(): number[] {
    return Array.from({length: this.columns || 0}, (_, index) => index);
  }

  getStyles(column: number): object {
    return {
      'width': `calc(100% / ${this.columns})`,
      'background-color': `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
    };
  }
}
