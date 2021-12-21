import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog1',
  templateUrl: './dialog1.component.html',
  styleUrls: ['./dialog1.component.scss']
})
export class Dialog1Component implements OnInit {
  isLoading: boolean = false
  
  constructor(public dialogRef: MatDialogRef<Dialog1Component>) { }

  ngOnInit(): void {
  }

  sendRequest() {
    this.isLoading = true

    //set time represents your delaying request
    setTimeout(() => {
      this.isLoading = false
      ///data has come after 2000s
      //send it to the calling component
      this.dialogRef.close({"id":"1" , "name":"naveen" , "message":"resoponse from the server"});
      //close dialog1 and open dialog2
      //display
    }, 2000);

  }

}
