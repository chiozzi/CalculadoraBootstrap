import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css']
})

// null faz com que os inputs iniciem sem nenhum número
export class AppComponent {
  num1: number | null = null;
  num2: number | null = null;
  resultado: number | null = null;

  // Somar
  onClickSomar() {
    if (this.num1 !== null && this.num2 !== null) {
      this.resultado = this.num1 + this.num2;
    }
  }

  // Subtrair
  onClickSubtrair() {
    if (this.num1 !== null && this.num2 !== null) {
      this.resultado = this.num1 - this.num2;
    }
  }

  // Multiplicar
  onClickMultiplicar() {
    if (this.num1 !== null && this.num2 !== null) {
      this.resultado = this.num1 * this.num2;
    }
  }

  // Dividir
  onClickDividir() {
    if (this.num1 !== null && this.num2 !== null) {
      if (this.num2 !== 0) {
        this.resultado = this.num1 / this.num2;
      } else {
        alert("Erro: Divisão por zero!");
      }
    }
  }

  // Potenciação
  onClickPotenciar() {
    if (this.num1 !== null && this.num2 !== null) {
      this.resultado = Math.pow(this.num1, this.num2);
    }
  }

  // Média
  onClickMediar() {
    if (this.num1 !== null && this.num2 !== null) {
      this.resultado = (this.num1 + this.num2) / 2;
    }
  }
}