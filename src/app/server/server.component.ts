import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {

  hovering = "you are not hovering over the button";
  text = "";
  setMouseStatusHover(){
    return this.hovering = "you are hovering over the button.";
  }

  setMouseStatusNoHover(){
    return this.hovering = "you are no longer hovering over the button.";
  }

  onUpdateName(event){
    this.text = event.target.value;
    console.log(event);
  }

}
