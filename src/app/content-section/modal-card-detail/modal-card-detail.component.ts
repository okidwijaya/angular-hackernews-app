import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ThreadService } from '../services/thread.service';
import { elementAt } from 'rxjs';
import { KidsItem } from '../threads';

@Component({
  selector: 'hc-modal-card-detail',
  templateUrl: './modal-card-detail.component.html',
  styleUrls: ['./modal-card-detail.component.scss']
})

export class ModalCardDetailComponent implements OnInit, OnDestroy {

  @Input() id?: string;
  isOpen = false;
  private element: any;

  kidsitemsModal: KidsItem[] = [];

  @Output() kids = new EventEmitter<KidsItem[]>();

  constructor(private service: ThreadService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    this.service.getComment().subscribe({
      next:(kidsItem: KidsItem[]) => {
        this.kidsitemsModal = kidsItem;
      },
      error: (error: any) => {
        console.error('Error:', error); 
      }
      });
  }

  getTimeAgo(timestamp: number): string {
    const currentTime = Math.floor(Date.now() / 1000); 
    const diffInSeconds = currentTime - timestamp;

    const hoursAgo = Math.floor(diffInSeconds / 3600);
    const minutesAgo = Math.floor((diffInSeconds % 3600) / 60);

    if (hoursAgo > 0) {
      return `${hoursAgo} hours ago`;
    } else if (minutesAgo > 0) {
      return `${minutesAgo} minute(s) ago`;
    } else {
      return 'Just now';
    }
  }

  ngOnDestroy(): void {

  }

  @Output() openEmit = new EventEmitter;

}
