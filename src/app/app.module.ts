import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import {MdCardModule} from '@angular/material';

import 'hammerjs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LDAPDetailsComponent } from './ldapdetails/ldapdetails.component';
import { MetadataMappingComponent } from './metadata-mapping/metadata-mapping.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NPServerComponent } from './npserver/npserver.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';
import { baseURL } from './shared/baseurl';

import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restConfig';
import { ProcessHTTPMsgService} from './services/process-httpmsg.service'
import { LdapService } from './services/ldap.service'
import { NpService } from './services/np.service'
import { MessageService } from './services/message.service'

import { KeysPipe } from './pipes/keys';
import { TruncatePipe } from './pipes/truncate';

import { BackendTestComponent } from './backend-test/backend-test.component';
import { DialogGenericComponent } from './dialog-generic/dialog-generic.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LDAPDetailsComponent,
    MetadataMappingComponent,
    UserDetailsComponent,
    NPServerComponent,
    SideBarComponent,
    KeysPipe,
    TruncatePipe,
    BackendTestComponent,
    DialogGenericComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    MdCardModule,
    HttpModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [{provide: 'BaseURL', useValue: baseURL}, 
              ProcessHTTPMsgService, 
              LdapService,
              NpService,
              MessageService
       //       {provide: MessageService, useValue: new MessageService} 
            ],
  bootstrap: [AppComponent],
  entryComponents: [DialogGenericComponent]
})
export class AppModule { }
