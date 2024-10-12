import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  text: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getText().subscribe(text => {
      this.text = text;
    });
  }
}
