import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { KidsItem, Story, StoryUpdateId } from '../threads';
import { ThreadService } from '../services/thread.service';


@Component({
  selector: 'hc-thread-card',
  templateUrl: './thread-card.component.html',
  styleUrls: ['./thread-card.component.scss']
})
export class ThreadCardComponent implements OnInit{
  @Input() items : Story[] = [];

  @Input() storyUpdateId : Story[] = [];

  @Output() commentedSelect = new EventEmitter<Story>(); 
  @Output() showComment = new EventEmitter; 
  @Output() dataCommentToParent = new EventEmitter;

  @Output() kidsData = new EventEmitter <KidsItem[]>();

  @Output() displayTest = new EventEmitter<KidsItem[]>()

  res: Story[] = [];

  kidsItem: KidsItem[] =[];

  displayComment = true;
  
  constructor(protected service: ThreadService){}

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

  findMaxScore(): number {
    const maxScore = this.items
      .slice(0, 4)
      .reduce((max, element) => (element.score > max ? element.score : max), 0);

    return maxScore;
  }

  findMaxScoreStory(): number {
    const maxScore = this.items
      .slice(4, 8)
      .reduce((max, element) => (element.score > max ? element.score : max), 0);

    return maxScore;
  }

  extractDomain(url: string) {
    const parsedUrl = new URL(url);
    return parsedUrl.hostname;
  }

  ngOnInit(): void {
  }

  commentSelect(item: Story, displayComment: true){
    this.commentedSelect.emit(item);
    this.showComment.emit(displayComment = true);
    
    let kidsComment = item.kids;
    this.kidsData.emit(kidsComment);
    this.service.setDataKids(kidsComment)
  }

  showCommentEvent(displayComment: boolean){
    this.showComment.emit(displayComment = true);
  }

  showDisplayCommentEvent(kidsItem: any){
    this.displayTest.emit(kidsItem);
  }

}
