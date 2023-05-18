import { Socio } from './../socio';
import { Component, OnInit } from '@angular/core';
import { SocioService } from '../socio.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-socio-list',
  templateUrl: './socio-list.component.html',
  styleUrls: ['./socio-list.component.css']
})
export class SocioListComponent implements OnInit {

  socios!: Socio[];

  constructor(private socioService: SocioService,
    private router: Router) { }

  ngOnInit(): void {
    this.getSocio();
  }

  private getSocio(){
    this.socioService.getSocioList().subscribe(data => {
      this.socios = data;
    });
  }

  SocioDetails(id: number | undefined){
    if(id !== undefined) {
      this.router.navigate(['socio-details', id]);
    }
  }

  updateSocio(id: number | undefined){
    if(id !== undefined) {
      this.router.navigate(['update-socio', id]);
    }
  }

  deleteSocio(id: number | undefined){
    if(id !== undefined) {
      this.socioService.deleteSocio(id).subscribe( data => {
        console.log(data);
        this.getSocio();
      })
    }
  }
}
