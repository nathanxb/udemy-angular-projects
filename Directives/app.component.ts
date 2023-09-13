import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practicing-directives';
  hideDetails = true;
  log = [];

  onDisplayDetails() {
    this.hideDetails = !this.hideDetails;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
