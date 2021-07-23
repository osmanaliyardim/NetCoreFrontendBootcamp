import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Product[], filterText: string): Product[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : ""
    // JS'deki indexof fonksiyonu string içinde o ifade var mı diye bakar yoksa -1 döner
    // varsa bulunduğu yerin indexini döner ve sonra hepsini Array'e atar döndürür
    return filterText ? value.filter((x:Product)=>x.productName.toLocaleLowerCase().indexOf(filterText)!==-1) : value
  }

}

//JavaScript arraylerdeki bazı fonksiyonlar:
//map, filter