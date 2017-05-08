import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'weiConverter'
})
export class WeiConverterPipe implements PipeTransform {

    transform(value: number, unit: string): number {

        switch (unit) {
            case 'Kwei': {
                return value / Math.pow(10, 3);
            }
            case 'Mwei': {
                return value / Math.pow(10, 6);
            }
            case 'Gwei': {
                return value / Math.pow(10, 9);
            }
            case 'microether': {
                return value / Math.pow(10, 12);
            }
            case 'milliether': {
                return value / Math.pow(10, 15);
            }
            case 'ether': {
                return value / Math.pow(10, 18);
            }
            default: {
                // As default we convert to Ethers
                return value / Math.pow(10, 18);
            }
        }
    }

}

