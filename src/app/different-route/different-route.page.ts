import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-different-route',
  templateUrl: './different-route.page.html',
  styleUrls: ['./different-route.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DifferentRoutePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
