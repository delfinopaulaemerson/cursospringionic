import { CredenciaisDTO } from './../app/credenciais.dto';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService{

    constructor(public http: HttpClient){

    }

    public authenticate(cred : CredenciaisDTO){
        return this.http.post("http://localhost:8080/login",cred,
        {
            observe : 'response',
            responseType : 'text'
        });
    }

}