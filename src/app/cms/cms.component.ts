import { Component } from '@angular/core';

import { changeSize } from '../animations';

@Component({
  selector: 'cms-component',
  templateUrl: './cms.component.html',
  animations: [changeSize]
})
export class CmsComponent {
  fontSize = 50;

  fontChanged(size: number) {
    this.fontSize = size;
  }
}
