import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<p>Hello World!</p>`,
  templateUrl: './app.component.html',
  styleUrls: ['app.compenent.css'],
  // styles: ['']
})
export class AppComponent {
  name = 'damion wilson';
  imgURL = 'https://picsum.photos/seed/picsum/500/500';

  images = [
    'https://picsum.photos/seed/picsum/500/500',
    'https://picsum.photos/seed/picsum/500/500',
    'https://picsum.photos/seed/picsum/500/500',
  ];

  currentDate = new Date();
  placeholder = 'This is some placeholder text';
  cost = 2000;
  temperature = 25.3;
  pizza = {
    toppings: ['cheese', 'pineapples'],
    size: 'X-large',
  };
  blueClass = false;
  fontSize = 16;

  //
  getName() {
    return this.name;
  }
  changeImage(e: KeyboardEvent) {
    this.imgURL = (e.target as HTMLInputElement).value;
  }
  logImg(event: string) {
    console.log(event);
  }
}
