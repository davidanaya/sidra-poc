import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="dashboard">
      <div class="dashboard--row">
        <overall-hospital></overall-hospital>
        <div class="patient-experience"></div>
        <div class="patient-safety"></div>
      </div>
      <div class="dashboard--row">
        <div class="inventory"></div>
        <div class="requests"></div>
        <div class="available-locations"></div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
