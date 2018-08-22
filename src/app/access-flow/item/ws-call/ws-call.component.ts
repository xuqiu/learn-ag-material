import { Component, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Inject} from '@angular/core';

@Component({
  selector: 'app-ws-call',
  templateUrl: './ws-call.component.html',
  styleUrls: ['./ws-call.component.css']
})
export class WsCallComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<WsCallComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
