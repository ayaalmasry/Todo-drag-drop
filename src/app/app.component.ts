import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnChanges, SimpleChange } from '@angular/core';

import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'myApp';
  todo:string[]=["read engilsh book","play music" ,"dance","walk"];
  progress:string[]=[];
  done:string[]=[];
  todo1:string="";
  constructor(private fb:FormBuilder){

  }
  drop(event:CdkDragDrop<string[]>){
    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data,event.previousIndex,event.currentIndex);
    }else{
      transferArrayItem(event.previousContainer.data,event.container.data,event.previousIndex,event.currentIndex)
    }
    // moveItemInArray(this.todo,event.previousIndex,event.currentIndex)
  }
  todo2(){
    if(this.todo1 === ''){
      return;
    }
    this.todo.push(this.todo1);
    this.todo1=""

  }
  
  }


  
  
  