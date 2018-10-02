import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Hello world</h1>
           <p>My first component</p>`,
  styles: [`h1,p{color:grey;}
            p{font-size: 5rem;}`]
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ivan Navin Blog';
}
