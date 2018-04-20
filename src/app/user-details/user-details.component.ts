import { Component, OnInit } from '@angular/core';
import { LDAPDetailsComponent } from '../ldapdetails/ldapdetails.component'
import { userRequest } from '../shared/userRequest'
import { MessageService } from '../services/message.service'
import { User } from '../shared/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  private users: User[];
  //private NPrintingUser={};
  private NPrintingUsers=[];
  private numUser: number;
  private userProperties;
  private ldapMetadata=[];
  private metadataMapping = {};
  private indexUser:number=0;
  private indexField:number=0;
  private ldapMapping={};
  

  constructor(  private messageService: MessageService,
                private router: Router ) { 
  }

  ngOnInit() {
      this.users = this.messageService.getUsers();
      this.userProperties=userRequest;
      this.ldapMetadata=[];
      for (var key in this.users[0]) {
        this.ldapMetadata.push(key);
      }
      console.log("ldapMetadata: ",this.ldapMetadata);
      this.numUser=this.messageService.getLen();
      
  }

  onPrev(){
    //this.router.navigate(['/ldap']);
    console.log(this.userProperties);
    for ( let userProp of this.userProperties) {
        console.log(userProp," : ",this.userProperties[userProp]);
    }
  }

  onNext(){
    console.log("Mapping utenti");
    for (let user of this.users) {
      var NPrintingUser={};
      for ( var userProp in this.userProperties) {
        NPrintingUser[userProp]=user[this.userProperties[userProp]]
      }
      NPrintingUser['enabled']=true;
      NPrintingUser['timezone']='Europe/Rome';
      NPrintingUser['locale']='en';
      this.NPrintingUsers.push(NPrintingUser);
      
    }
    this.messageService.setUser(this.NPrintingUsers);
    this.router.navigate(['/npserver']);
  }

  prevUser() {
    if(this.indexUser>0)
      this.indexUser--;
  }

  nextUser(){
    if(this.indexUser<this.numUser-1)
    this.indexUser++;
  }

  prevField(key){
    console.log("Proprietà cambiata per chiave ",key);
    if(this.indexField > 0)
      this.indexField--;
    this.userProperties[key]=this.ldapMetadata[this.indexField];

  }

  nextField(key) {
    console.log("Proprietà cambiata per chiave ",key);
    if(this.indexField < this.ldapMetadata.length)
      this.indexField++;
    this.userProperties[key]=this.ldapMetadata[this.indexField];
  }
}
