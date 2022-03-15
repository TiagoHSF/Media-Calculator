import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';
  invisible = true;
  note1Ready: any;
  note2Ready: any;
  sum: any;
  weight: any;
  result: any;

  expand(){
   if(this.invisible === true){
      this.invisible = false;
    } else {
      this.invisible = true;
    }
  }

  calc(note1: string, note2: string, weight: string){
    this.note1Ready = parseInt(note1);
    this.note2Ready = parseInt(note2);
    this.weight = parseInt(weight);
    if(note1 != null && note2 != null){
      this.result = (this.note1Ready + this.note2Ready) / this.weight
    }
  }
}

