import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test-apartoo-angular';
  connected: boolean = false;

  connectView(req: boolean) {
    this.connected = req;
  }
}
