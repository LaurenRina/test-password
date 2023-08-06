import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { PasswordCheckerService } from './password-checker.service';
import { TBarColor } from '../../types/bar.types';
@Component({
  selector: 'password-checker',
  templateUrl: './password-checker.component.html',
  styleUrls: ['./password-checker.component.css'],
  providers: [PasswordCheckerService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordCheckerComponent {
  barColors: Array<TBarColor> = [];

  @Input() set currentPasswordValue(value: string) {
    console.log(value);
    const force = PasswordCheckerService.checkStrength(value);
    this.assignColorAndActiveBars(force);
  }

  assignColorAndActiveBars(force: number): void {
    if (force === 0) {
      this.barColors = [];
    } else if (force === 1) {
      this.barColors = ['darkred', 'darkred', 'darkred'];
    } else if (force < 20) {
      this.barColors = ['darkred'];
    } else if (force < 30) {
      this.barColors = ['orange', 'orange'];
    } else if (force >= 30) {
      this.barColors = ['yellowgreen', 'yellowgreen', 'yellowgreen'];
    }
  }
}
