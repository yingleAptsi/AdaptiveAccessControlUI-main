import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Header } from '@aptsi-types';

@Component({
  selector: 'aptsi-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

    @Input() haveUpdateDelete: boolean = true;
    @Input() headers: Header[];
    @Input() data: any[];

    @Output() updateClicked = new EventEmitter<number>();
    @Output() deleteClicked = new EventEmitter<number>();

    constructor() { }

    ngOnInit(): void {
    }

    update(index: number) {
        this.updateClicked.emit(index);
    }

    delete(index: number) {
        this.deleteClicked.emit(index);
    }

}
