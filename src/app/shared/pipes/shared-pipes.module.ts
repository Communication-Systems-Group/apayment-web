import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WeiConverterPipe} from './wei-converter.pipe';
import {UserFirstLastNamePipe} from './user-firstname-lastname.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
              declarations: [WeiConverterPipe, UserFirstLastNamePipe],
              exports: [WeiConverterPipe, UserFirstLastNamePipe]
})
export class SharedPipesModule { }
