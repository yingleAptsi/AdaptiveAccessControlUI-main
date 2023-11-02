import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableComponent } from './table/table.component';

const components = [
    TableComponent,
];

const providers = [];

@NgModule({
    declarations: [...components],
    imports: [
        CommonModule,
    ],
    exports: [...components],
    providers: [...providers],
})
export class SharedModule {}
