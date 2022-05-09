import { Component, OnInit } from '@angular/core';
import { ArukService } from '../utils/aruk.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ConnectionService } from '../utils/connection.service';
import { HttpResponse } from '@angular/common/http';
import { Coffee } from '../coffee';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  stringJson: any;
  stringObject: any;

  constructor(private arukService: ArukService, private connectionService: ConnectionService, private router: Router) {
    this.listaru();
    console.log(environment);
  }

  title = 'PRF';

  example = ['1_elem'];
  aruk: Coffee[] = [];


  goToSecond() {
    this.router.navigate(['/second', 'PRF', {message: this.title}]);
  }

  hello() {
    console.log('Hello World!');
    if(this.title === 'PRF') {
      this.title = 'NOT PRF';
    } else {
      this.title = 'PRF';
    }
    this.example.push(Math.floor(Math.random()*100) + '_elem');
    this.connectionService.greet().subscribe(data => {
      console.log('This came from the server: ', data);
    }, error => {
      console.log('Sorry we encountered an error: ', error);
    });

    this.connectionService.getTodos().subscribe(res => {
      console.log('spring response', res);
    }, error => {
      console.log('error on the spring part', error);
    })
  }

  helloFrom(st: string) {
    console.log('Hello from ' + st);
  }

  listaru(): void{
    this.arukService.listaru().subscribe(
      aruk => this.aruk = aruk)
  }

  updatearu(nev: string, ar: number, orszag: string, mennyiseg: number, darab: number): void{
    if(darab<=0) {darab=0}
    this.arukService.updatearu(nev, ar, orszag, mennyiseg, darab).subscribe(aruk => this.aruk = aruk)
  }



  ngOnInit(): void {

  }

}
