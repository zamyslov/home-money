import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {EventsService} from '../../shared/services/events.service';
import {CategoriesService} from '../../shared/services/categories.service';
import {mergeMap} from 'rxjs/operators';
import {WFMEvent} from '../../shared/models/event.model';
import {Category} from '../../shared/models/category.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'wfm-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.scss']
})
export class HistoryDetailComponent implements OnInit, OnDestroy {

  event: WFMEvent;
  category: Category;
  isLoaded = false;
  sub1: Subscription;

  constructor(private rout: ActivatedRoute,
              private eventService: EventsService,
              private categoriesService: CategoriesService) {
  }

  ngOnDestroy(): void {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }

  ngOnInit() {
    this.sub1 = this.rout.params
      .pipe(mergeMap((params: Params) => this.eventService.getEventById(params['id'])))
      .pipe(mergeMap((event: WFMEvent) => {
        this.event = event;
        return this.categoriesService.getCategoryById(event.category);
      }))
      .subscribe((category: Category) => {
        this.category = category;
        this.isLoaded = true;
      });
  }
}
