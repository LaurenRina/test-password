import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordCheckerService {
  static checkStrength(password: string) {
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
}
