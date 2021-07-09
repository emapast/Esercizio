import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  person: IPerson = {
    firstname: '',
    lastname: '',
    eta: null,
  };

  title(title: any) {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    alert('DATI REGISTRATI\n' + JSON.stringify(this.person));
    console.log('DATI SALVATI IN CONSOLE\n\n' + JSON.stringify(this.person));
  }
}

export interface IPerson {
  firstname: string;
  lastname: string;
  eta: number;
}
