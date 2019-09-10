import { CategoriaDTO } from './../../models/categoria.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CategoriaService{

    constructor(public http : HttpClient){

    }

    findAll() : Observable<CategoriaDTO[]>{
        return this.http.get<CategoriaDTO[]>("http://localhost:8080/categorias");
    }

}