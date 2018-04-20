import { Component, OnInit } from '@angular/core';
import { LdapService } from '../services/ldap.service'
import { UserDetailsComponent } from '../user-details/user-details.component'

import { MessageService } from '../services/message.service'
import { User } from '../shared/user';

import {Router} from '@angular/router';

@Component({
  selector: 'app-ldapdetails',
  templateUrl: './ldapdetails.component.html',
  styleUrls: ['./ldapdetails.component.scss']
 // providers : [MessageService]
})

export class LDAPDetailsComponent implements OnInit {

  submitted;
  ldap = {ldapPort:389, ldapServer:"ldap://"};
  Users:User[];


  constructor(private ldapService: LdapService,
              private messageService: MessageService,
              private router: Router ) { }

  ngOnInit() { 
    this.submitted=false;
    this.Users=[];
  }

  onSubmit() {
    this.submitted=true;
    this.ldapService.postUser(this.ldap).subscribe( Users => this.Users = Users)
    console.log(this.messageService.testService());
    //
  }

  onNext() {
    this.messageService.testService();
    this.messageService.setUser(this.Users);
    console.log("Numero di utenti :",this.messageService.getLen());
    this.router.navigate(['/userdetail']);
  }
}
