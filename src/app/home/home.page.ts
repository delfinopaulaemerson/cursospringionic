import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, public menu : MenuController) {}

  /**
   * login
   */
  public login() {
    this.router.navigate(['/categorias']);
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
