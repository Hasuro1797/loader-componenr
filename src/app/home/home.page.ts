import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { LoaderComponent } from '../loader/loader.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonContent, LoaderComponent, CommonModule],

})
export class HomePage {
  loading: boolean = false;

  series1 = [
    { src: 'assets/img/series1/image2.jpg', text: "test for image 1"},
    { src: 'assets/img/series1/image1.jpg', text: "Text for image 2"}
  ]

  series2 = [
    { src: 'assets/img/series2/image3.jpg', text: "test for image 1"},
    { src: 'assets/img/series2/image4.jpg', text: "Text for image 2"}
  ]
  useSet1: boolean = true;
  constructor(private router: Router) {}

  showLoader() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/different-route']);
    }, 10000);
  }
}
