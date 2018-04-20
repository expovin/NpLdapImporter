import { Component, OnInit } from '@angular/core';
//import { US } from '../shared/dictTest';
import { userRequest } from '../shared/userRequest';
import { MessageService } from '../services/message.service';
import { LdapService } from '../services/ldap.service';
import { MdProgressBarModule } from '@angular/material';
import { MdDialog, MdDialogRef } from '@angular/material';
import { DialogGenericComponent } from '../dialog-generic/dialog-generic.component';

@Component({
  selector: 'app-npserver',
  templateUrl: './npserver.component.html',
  styleUrls: ['./npserver.component.scss']
})
export class NPServerComponent implements OnInit {

  private user = {};
  private color = 'primary';
  private mode = 'determinate';
  private fondoscala = this.messageService.getUsers().length;


  private importing = false;
  private userProperties;
  private NPrintingUsers=[];
  private NPServer = {NPPort:4993};
  private importedUsers=[];
  private errorUsers=[];
  private fUsersLen=0;
  private tmpUserNum=0;
  constructor(private messageService: MessageService,
              private ldapService: LdapService,
              public dialog: MdDialog) { }  


  ngOnInit() {
    //this.user=US;
    this.userProperties = userRequest;
    this.NPrintingUsers = this.messageService.getUsers();
    console.log("Sono in npserver");
    console.log(this.NPrintingUsers);
    
  }

  back() {
    console.log("Ritorno alla pagina precedente");
  }

  auth() {
    console.log("Cliccato Auth");
    this.ldapService.NPAuth(this.NPServer).subscribe(returnCode => {
      console.log(returnCode);
      this.NPServer['RetCode'] = returnCode['Status Code'];
    });
  }

  loaded(value) {
    if(value.loaded){
      this.tmpUserNum+=(100/this.fondoscala);
    }
    return value.loaded;
  }


  import() {

    this.importing = true;

    this.NPrintingUsers.forEach( user => {

      this.ldapService.importUser(user).subscribe( 
        // Next
        v => {
        console.log(v);
        user['loaded']=true;

        this.tmpUserNum=0;
        this.importedUsers = this.NPrintingUsers.filter(this.loaded, this);

        if(this.tmpUserNum > this.fUsersLen)
          this.fUsersLen = this.tmpUserNum;

      },
      // Error
      e => {
        console.log("Errore : ",e);
        user['error']=e.data.error;
        this.errorUsers.push(user);
      }
    );
    });

  }

  loop(){
    console.log("Inizio loop");

    for(var c in this.userProperties){
      console.log(c , ":",this.userProperties[c]);
    }
  }

  openDialog() : void {

    console.log("Error Users : ",this.errorUsers);
    this.messageService.setUser(this.errorUsers);

    let dialogRef = this.dialog.open(DialogGenericComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      

    });

  //  dialogRef.updatePosition({ top: '25px', left: '25px' });

  }


}
