import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { DialogGenericComponent } from '../dialog-generic/dialog-generic.component';

@Component({
  selector: 'app-backend-test',
  templateUrl: './backend-test.component.html',
  styleUrls: ['./backend-test.component.scss']
})

export class BackendTestComponent implements OnInit {

  selectedOption: string;
  public total=0;
  private filteredUsers = [];
  private userLen = this.users.length;
  private fUsersLen=0;

loaded(value) {
  if(value.loaded)
    this.fUsersLen++;

  return value.loaded;
}

  constructor(public dialog: MdDialog) { }


  openDialog() : void {

    let dialogRef = this.dialog.open(DialogGenericComponent, {
      height: '200px',
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });

    dialogRef.updatePosition({ top: '25px', left: '25px' });
  }

  ngOnInit() {
   this.filteredUsers = this.users.filter(this.loaded, this);
  }

}
