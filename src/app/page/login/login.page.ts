import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/service/theme.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public temaEscuroHabilitadoBoolean:Boolean = false;

  constructor(
    private themeService: ThemeService
  ) { }

  ngOnInit() { 
    this.themeService.carregarTema();
    this.temaEscuroHabilitadoBoolean = document.body.classList.contains("escuro");
  }

  public alternarTema() {
    this.themeService.alterarTema();
    this.temaEscuroHabilitadoBoolean = !this.temaEscuroHabilitadoBoolean;
  }

}
