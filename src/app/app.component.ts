import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html'
})

export class AppComponent {

  
  person: IPerson = {
    firstname: "",
    lastname: "",
    eta: 20,                // non so come rendere la stringa -> valore numerico...
  };
 

  title(title: any) {
    throw new Error('Method not implemented.');
  }
  model: any = {};

  onSubmit() {
    alert('DATI REGISTRATI\n' + JSON.stringify(this.model))
    console.log('DATI SALVATI IN CONSOLE\n\n' + JSON.stringify(this.model))
  }
}

export interface IPerson {
  firstname: string;
  lastname: string;
  eta: number;
}




