import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  template: 'Called API and got: "{{greeting}}"'
})
export class AppComponent implements OnInit {
  public greeting: string;

  public constructor(private readonly http: HttpClient) {
  }

  public async ngOnInit(): Promise<void> {
    // Check if development or prod deployment
    let restUrl = location.origin + '/api/hello?name=Azure';
    if (this.isDevelopment()) {
      restUrl = 'http://localhost:8080/api/hello?name=Angular';
    }
    this.greeting = await this.http.get(restUrl, {responseType: 'text'}).toPromise();
  }

  private isDevelopment = (): boolean => location.host.includes('localhost');
}
