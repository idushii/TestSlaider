import { Component, OnInit, Input } from '@angular/core';
import { GuideService } from '../guide.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less']
})
export class SliderComponent implements OnInit {

  items = []

  index = 0

  constructor(
    private guideService: GuideService,
  ) { }

  ngOnInit() {
    this.items = this.guideService.items;
  }

  next() {
    this.index++
    if (this.index == 8) alert("Слайды закончились!")
  }
  
  open(index) {
    this.index = index;
  }

  handleForward() {

  }
}
