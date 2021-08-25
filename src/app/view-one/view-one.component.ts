import {Component, OnInit} from '@angular/core';
import {CommonService} from '../services/common.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-one',
  templateUrl: './view-one.component.html',
  styleUrls: ['./view-one.component.scss']
})
export class ViewOneComponent implements OnInit {
  view1Input: any;

  constructor(private commonService: CommonService, private router: Router) {
  }

  ngOnInit(): void {
    this.view1Input = this.commonService.InputValue;
  }

  emitValue = () => {
    this.commonService.InputValue = this.view1Input;
    this.router.navigateByUrl('/view-two');
  };
}
