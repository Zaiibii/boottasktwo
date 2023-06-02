import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page-overview',
  templateUrl: './main-page-overview.component.html',
  styleUrls: ['./main-page-overview.component.css']
})
export class MainPageOverviewComponent {
  imageObject = [{

    thumbImage: '../assets/images/allgames.jpg',

}, {

    thumbImage: '../assets/images/cricket1.jpg'
}, {

    thumbImage: '../assets/images/football.jpg',

},{

    thumbImage: '../assets/images/horse.jpg',

}, {

    thumbImage: '../assets/images/cards.jpg'
},];

}
