import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Input } from '@angular/core';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { ItemThread, KidsItem, KidsItemContent, Story, StoryUpdateId } from '../threads';
import { Observable, Subject, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {

  threadsList: ItemThread[] = [];

  stories: Array<Observable<Story>> = [];

  closeModalCard: boolean = true;

  modalCard: any;

  dataKids: any;

  dataCommentList: any;

  kidsComment: Array<Observable<KidsItem>> = [];

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient) {
    console.log(`thread: ${this.config.apiEndpoint}`);
  }

  getThreads() {
    return this.http.get<ItemThread[]>(`${this.config.apiEndpoint}/v0/askstories.json?print=pretty`);
  }

  fetchStories(): Observable<Story[]> {
    return this.http.get<number[]>(`${this.config.apiEndpoint}/v0/topstories.json?print=pretty`).pipe(
      switchMap((itemIds: number[]) => {
        const itemObservables: Observable<Story>[] = itemIds.map((id: number) =>
          this.http.get<Story>(`${this.config.apiEndpoint}/v0/item/${id}.json?print=pretty`)
        );
        return forkJoin(itemObservables);
      })
    );
  }

  getComment(): Observable<KidsItem[]> {
    const itemObservablesComment: Observable<KidsItem>[] = this.getDataKids()?.map((id: number) =>
      this.http.get<KidsItemContent>(`${this.config.apiEndpoint}/v0/item/${id}.json?print=pretty`)
    );
    return forkJoin(itemObservablesComment);
  }

  setDataKids(data: any): void {
    this.dataKids = data;
  }

  getDataKids(): any {
    return this.dataKids;
  }

}
