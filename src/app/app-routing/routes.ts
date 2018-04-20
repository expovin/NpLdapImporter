import { Routes } from '@angular/router';

import { LDAPDetailsComponent } from '../ldapdetails/ldapdetails.component';
import { NPServerComponent } from '../npserver/npserver.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import  {BackendTestComponent } from '../backend-test/backend-test.component';

export const routes: Routes = [
  { path: 'ldap',  component: LDAPDetailsComponent },
  { path: 'npserver',     component: NPServerComponent },
  { path: 'userdetail',     component: UserDetailsComponent },
  { path: 'test',     component: BackendTestComponent },
  { path: '', redirectTo: '/ldap', pathMatch: 'full' }

];