import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public isFoco: Boolean = false;

  public isCampoNomeCompletoInputPreenchido: Boolean = false;
  public isCampoEmailInputPreenchido: Boolean = false;
  public isCampoSenhaInputPreenchido: Boolean = false;
  public isCampoConfirmarSenhaInputPreenchido: Boolean = false;

  constructor(
    private navController: NavController
  ) { }

  ngOnInit() { }

  public onFocus(inputID: String) {
    debugger;
    this.isCampoNomeCompletoInputPreenchido = true;
    this.isCampoEmailInputPreenchido = true;
    this.isCampoSenhaInputPreenchido = true;
    this.isCampoConfirmarSenhaInputPreenchido = true;
  }

  public onBlur(event: any) {
    if (!event.target.value) {
      this.isFoco = false;
    }
  }

  public redirecionarTelaPrincipal() {
    setTimeout(() => {
      this.navController.navigateForward(["/principal"]);
    }, 1000);
  }

}
