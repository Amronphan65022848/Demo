import { Component, Output,EventEmitter  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import e from 'express';



@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatInputModule,MatButtonModule,FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Output() search=new EventEmitter<string>();

  onSearch(){
    console.log("onSearch called")
    this.search.emit(this.text);
  }
  text ="";
  InputChange(event:any){
    console.log("inputchange",event.target.value)
    this.text = event.target.value;
    
  }
  onTyping(event:any){
    console.log("onTyping",this.text);
  }
}
