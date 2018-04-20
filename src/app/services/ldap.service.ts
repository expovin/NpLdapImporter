import { Injectable } from '@angular/core';
import { RestangularModule, Restangular } from 'ngx-restangular';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { RestangularConfigFactory } from '../shared/restConfig';
import { Observable } from 'rxjs/Observable';

import { User } from '../shared/user';


import 'rxjs/add/operator/catch';


@Injectable()
export class LdapService {

  constructor(private http: Http,
              private restangular: Restangular,
              private processHTTPMsgService: ProcessHTTPMsgService) { }

  getUsers(data) : Observable <User[]> {
    return this.http.post(baseURL + 'ldap',data)
                    .map(res => { return this.processHTTPMsgService.extractData(res); });
  }  

  postUser(data) : Observable <User[]> {
    return this.restangular.all('ldap').post(data);
  }

  NPAuth (data) : Observable <any> {
    return this.restangular.all('np/auth').post(data);
  }
  
  importUser (data) : Observable <any> {
    return this.restangular.all('np/user').post(data);
  }


  addUsersToNprinting(Server,Port,data) : Observable <User[]> {
    var baseNPUrl = "https://"+Server+":"+Port+"/api/v1/"

    let headers = new Headers({ 'withCredentials' : true  });
    let options = new RequestOptions({ headers: headers });


    //process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    return this.http.post(baseNPUrl + 'users',  data, {'headers' : headers})
                    .map(res => { return this.processHTTPMsgService.extractData(res); });
  }


}
