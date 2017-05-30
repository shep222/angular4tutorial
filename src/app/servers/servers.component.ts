import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test';
  serverCreated = false;
  servers = ['Testserver', 'Testserver2']
  toggledOff = false;
  toggledArray = []

  constructor() {
      setTimeout(()=> {
          this.allowNewServer = true;
      }, 2000)
  }

  ngOnInit() {
  }

  toggleMe(){
    //   this.toggledArray.push(this.toggledArray.length + 1)
    this.toggledArray.push(new Date())
      if(this.toggledOff === false){
         this.toggledOff = true
      } else {
         this.toggledOff = false;
      }
  }

  onCreateServer(){
      this.serverCreated = true;
      this.servers.push(this.serverName);
      this.serverCreationStatus = `Created! Name is ${this.serverName}`;
  }

  onUpdateServerName (event: Event){
      this.serverName = (<HTMLInputElement>event.target).value;
  }
}
