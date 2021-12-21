import { Dialog1Component } from './dialog1/dialog1.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Dialog2Component } from './dialog2/dialog2.component';

@Component({
  selector: 'app-dialog-spinner',
  templateUrl: './dialog-spinner.component.html',
  styleUrls: ['./dialog-spinner.component.scss']
})
export class DialogSpinnerComponent implements OnInit {

constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    let dialogRef = this.dialog.open(Dialog1Component, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      console.log(`Dialog result: ${result}`);

      this.sendResponseToDialog2(result)
    });





   

  }

  sendResponseToDialog2(result: { "id": string, "name": string, "message": string }) {
    let dialogRef2 = this.dialog.open(Dialog2Component, {
      data: result,
      height: '400px',
      width: '600px',
    });

    dialogRef2.afterClosed().subscribe(result => {
      console.log(result)
      console.log(`Dialog result: ${result}`);
    });
  }

}
