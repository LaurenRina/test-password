import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

type TBarColor = 'darkred' | 'orange' | 'yellowgreen';

@Component({
  selector: 'password-checker',
  templateUrl: './password-checker.component.html',
  styleUrls: ['./password-checker.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordCheckerComponent {
  barsColor!: TBarColor;
  barsActiveAmount: number = 0;

  @Input() set currentPasswordValue(value: string) {
    const force = this.checkStrength(value);
    this.assignColorAndActiveBars(force);
  }

  checkStrength(password: string) {
    let force = 0;

    if (password.length === 0) return 0;
    else if (password.length < 8) return 1;

    const letters: boolean = /[A-Za-z]+/.test(password);
    const numbers: boolean = /[0-9]+/.test(password);
    const symbols: boolean = /[$-/:-?{-~!"^_@`\[\]]/g.test(password);
    const flags = [letters, numbers, symbols];

    let matches = 0;
    for (const flag of flags) {
      matches += flag ? 1 : 0;
    }

    return matches * 10;
  }

  assignColorAndActiveBars(force: number): void {
    if (force === 0) {
      this.barsActiveAmount = 0;
    } else if (force === 1) {
      this.barsActiveAmount = 3;
      this.barsColor = 'darkred';
    } else if (force < 20) {
      this.barsActiveAmount = 1;
      this.barsColor = 'darkred';
    } else if (force < 30) {
      this.barsActiveAmount = 2;
      this.barsColor = 'orange';
    } else if (force >= 30) {
      this.barsActiveAmount = 3;
      this.barsColor = 'yellowgreen';
    }
  }
}
