
import { AuthService } from './../../services/auth.service';

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { CredenciaisDTO } from 'src/models/credenciais.dto';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  email : string = '';
  senha : string = '';
  creds : CredenciaisDTO = {
    email: "",
    senha: ""
  };

  constructor(private router: Router, public menu : MenuController, public auth: AuthService) {}


  ngOnInit() {
     
    }

  /**
   * login
   */
  public login() {
    console.log(this.creds.email);
    console.log(this.creds.senha);
    this.auth.authenticate(this.creds)
    .subscribe(response =>{
      this.auth.sucessFullLogin(response.headers.get('Authorization'));
      console.log(response.headers.get('Authorization'));
      this.router.navigate(['/categorias']);
    },
    error =>{});
    
  }

  /**
   * desabilita o menu 
   */
  ionViewWillEnter() {
    this.menu.swipeEnable(false);
    }
    /**
     * habilita o menu
     */
    ionViewDidLeave() {
      this.menu.swipeEnable(true);
    }

}
