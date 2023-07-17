import { Component, Input, OnInit } from '@angular/core';
import { DisplayComment, ItemThread, Story, TestRes, StoryUpdateId, KidsItemContent, KidsItem } from './threads';
import { ThreadService } from './services/thread.service';
import { Observable, Subscriber, Subscription, subscribeOn } from 'rxjs';

@Component({
  selector: 'hc-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.scss']
})
export class ContentSectionComponent implements OnInit {

  testRes: TestRes = {
    testId: 1
  }

  itemThread: ItemThread[] = [];

  items: Story[] = [];

  storyUpdate: Story[] = [];

  storyUpdateId: StoryUpdateId[] = [];

  kidsCommentContent: KidsItemContent[] = [];

  kidsitems: KidsItem[] = [];

  displayComment: boolean = true;

  slcm!: Story;

  modalClose: boolean = false;

  constructor(private idListServices: ThreadService, protected service : ThreadService, private dataKids: ThreadService) { }

  ngOnInit(): void {
    this.idListServices.getThreads().subscribe(thread => {
    })

    this.idListServices.fetchStories().subscribe({
      next: (items: Story[]) => {
        this.items = items;
        this.displayItemDetails();
      },
      error: (error: any) => {
        console.error('Error:', error); 
      }
    });
  }
  
  displayItemDetails(): void {
  }
  
  displayItemDetailsComment(): void {
  }
  
  commentedSelected(items: any, displayComment: any){
    this.slcm = items;
    this.displayComment = displayComment;
    this.modalClose = !this.displayComment;
  }

  showcomment(displayComment: any){
  }

  CloseModal(){
    this.modalClose= !this.modalClose;
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

  extractDomain(url: string) {
    const parsedUrl = new URL(url);
    return parsedUrl.hostname;
  }

  displayTest(kidsItem: KidsItem) {
  }
}


