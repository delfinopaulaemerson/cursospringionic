import { StorageService } from './storage.service';
import { LocalUser } from './../models/local_user';


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CredenciaisDTO } from 'src/models/credenciais.dto';

@Injectable()
export class AuthService{

    constructor(public http: HttpClient, public storageService : StorageService){

    }

    public authenticate(cred : CredenciaisDTO){
        return this.http.post("http://localhost:8080/login",cred,
        {
            observe : 'response',
            responseType : 'text'
        });
    }

    public sucessFullLogin(authorizationValue :string){
        let tok = authorizationValue.substring(7);
        let user : LocalUser = {
            token: tok
        };
        this.storageService.setLocalUser(user);
    }

    public logout(){
        this.storageService.setLocalUser(null);
    }

}