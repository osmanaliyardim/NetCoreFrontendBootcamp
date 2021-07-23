import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {
  //value fiyat, rate KDV oranı, sondaki number ise dönülecek değer
  transform(value: number, rate: number): number {
    return value + (value * rate / 100);
  }

}