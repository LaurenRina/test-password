import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { TBarColor } from '../../types/bar.types';

@Component({
  selector: 'bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarComponent {
  @Input() barColor!: TBarColor;
}
