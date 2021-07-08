import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html'
})

person: IPerson = {
  firstname: "",
  lastname: "",
  eta: ""
}

export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  model: any = {};

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }
}
