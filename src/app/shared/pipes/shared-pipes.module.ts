import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WeiConverterPipe} from './wei-converter.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [WeiConverterPipe],
    exports: [WeiConverterPipe]
})
export class SharedPipesModule { }
