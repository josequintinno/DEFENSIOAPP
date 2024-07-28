import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private escuro = "escuro";
  private claro = "claro";

  constructor(private storage: Storage) {
    this.storage.create();
  }

  public alterarTema() {
    this.storage.get("tema").then(tema => {
      if (tema === "escuro") {
        this.habilitarTemaClaro();
      } else {
        this.habilitarTemaEscuro();
      }
    });
  }

  public async carregarTema() {
    const tema = await this.storage.get("tema");
    if (tema === "escuro") {
      this.habilitarTemaEscuro();
    } else {
      this.habilitarTemaClaro();
    }
  }

  public habilitarTemaClaro() {
    document.body.classList.remove(this.escuro);
    this.storage.clear();
    this.storage.set("tema", "claro");
  }

  public habilitarTemaEscuro() {
    document.body.classList.add(this.escuro);
    this.storage.clear();
    this.storage.set("tema", "escuro");
  }

}
