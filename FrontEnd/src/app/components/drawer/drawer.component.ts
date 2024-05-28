import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {
  @Input() headerStyle: any; // Input para receber o estilo do drawer-header
  @Input() isOpen: boolean = false;
  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  toggleDrawer(): void {
    this.isOpen = !this.isOpen;
  }

}
