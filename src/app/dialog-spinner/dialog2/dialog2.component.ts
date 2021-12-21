import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog2',
  templateUrl: './dialog2.component.html',
  styleUrls: ['./dialog2.component.scss']
})
export class Dialog2Component implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { "id": string, "name": string, "message": string }) { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
