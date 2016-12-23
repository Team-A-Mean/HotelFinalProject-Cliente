import { Component, OnInit } from '@angular/core';

import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

    public title: string;
    public message: string;

    constructor(public dialogRef: MdDialogRef<DialogComponent>) {

    }
}
