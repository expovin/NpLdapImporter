import { Component, OnInit, Inject } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { MessageService } from '../services/message.service';
import { LdapService } from '../services/ldap.service';

@Component({
  selector: 'app-dialog-generic',
  templateUrl: './dialog-generic.component.html',
  styleUrls: ['./dialog-generic.component.scss']
})
export class DialogGenericComponent implements OnInit {

  private errUsers = this.messageService.getUsers();

  constructor(public dialogRef: MdDialogRef<DialogGenericComponent>,
              @Inject(MD_DIALOG_DATA) public data: any,
              private messageService: MessageService,
              private ldapService: LdapService) { }

  ngOnInit() {
    console.log("Users : ",this.errUsers);
  }

  onResubmit(){

    for(var i=0; i<this.errUsers.length; i++){
      var user = this.errUsers.shift();

      delete user["error"];

      this.ldapService.importUser(user).subscribe(
        v => {
          console.log(v);
          user['loaded']=true;
        },
        e => {
          user['error']=e.data.error;
          this.errUsers.push(user);
        }    
      )
    }
  }

}
