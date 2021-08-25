import {Component, OnInit, OnDestroy} from '@angular/core';
import {CommonService} from '../services/common.service';
import {Subscription} from 'rxjs';

// import {subscription} from "rxjs"
@Component({
  selector: 'app-view-two',
  templateUrl: './view-two.component.html',
  styleUrls: ['./view-two.component.scss']
})
export class ViewTwoComponent implements OnInit, OnDestroy {
  view1InputValue: any;
  subject: Subscription;

  constructor(private commonService: CommonService) {
    // this.subject = this.commonService.view1InputValue.subscribe(value => {
    //   this.view1InputValue = value;
    //   console.log('subscribed value====>>>', value);
    // });
  }

  ngOnInit(): void {
    this.view1InputValue = this.commonService.InputValue;
  }

  ngOnDestroy = () => {
    console.log('inside onDestroy====>>>');
    // this.subject.unsubscribe();
  }

}
