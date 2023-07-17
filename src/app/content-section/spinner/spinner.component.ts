import { Component, Input, OnInit } from '@angular/core';
import { KidsItem, Story } from '../threads';

@Component({
  selector: 'hc-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  @Input() items: Story[] =[];

  @Input() kidsitem: KidsItem[] =[]
  ngOnInit(): void {
  }
}
