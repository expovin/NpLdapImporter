import { Injectable } from '@angular/core';
import { LdapService } from '../services/ldap.service';
import { Observable } from 'rxjs/Observable';

import { User } from '../shared/user';


import 'rxjs/add/operator/catch';



@Injectable()
export class NpService {

private importedUsers=[];
private errorUsers=[];

  constructor(private ldapService: LdapService) { }



}
