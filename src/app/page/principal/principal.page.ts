import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(
    private navController: NavController
  ) { }

  ngOnInit() { }

  ionViewDidEnter() {
    setTimeout(() => {
      this.navController.navigateForward(['/login']);
    }, 2000);
  }

}
