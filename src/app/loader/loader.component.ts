import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {IonicModule} from '@ionic/angular'

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  standalone: true,
  imports:[CommonModule, IonicModule]
})
export class LoaderComponent  implements OnInit {
  @Input() imagesSet1: { src: string, text: string }[] = [];
  @Input() imagesSet2: { src: string, text: string }[] = [];
  @Input() interval: number = 3000;
  @Input() useSet1: boolean = true;

  currentIndex: number = 0;
  currentImage: { src: string; text: string; } | undefined;


  startLoader() {
    const images = this.useSet1 ? this.imagesSet1 : this.imagesSet2;
    if (images.length > 0) {
      this.currentImage = images[this.currentIndex];
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % images.length;
        this.currentImage = images[this.currentIndex];
      }, this.interval);
    }
  }

  ngOnInit() {
    this.startLoader();
  }

}
