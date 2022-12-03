import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TweeterService {
  constructor() {}

  public printLine(stringToPrint: string): void {
    console.log('Printed from TweeterService: ' + stringToPrint);
  }
}
