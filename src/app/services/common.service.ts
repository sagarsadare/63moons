import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  InputValue; // to share the info from view 1 to view 2
  constructor() {
  }
}
