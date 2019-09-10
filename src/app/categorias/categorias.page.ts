import { CategoriaDTO } from './../../models/categoria.dto';
import { CategoriaService } from './../../services/domain/categoria.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  items : CategoriaDTO[];

  constructor(private router : Router, public categoriaService: CategoriaService) { }

  ngOnInit() {
    this.categoriaService.findAll().subscribe((data) =>{
      this.items = data;
    },
      error =>{
        console.log(error);
    });
  }
   
 


}
