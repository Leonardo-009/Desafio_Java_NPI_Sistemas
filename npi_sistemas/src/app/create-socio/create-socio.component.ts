import { Component } from '@angular/core';
import { Socio } from '../socio';
import { Router } from '@angular/router';
import { SocioService } from '../socio.service';


@Component({
  selector: 'app-create-socio',
  templateUrl: './create-socio.component.html',
  styleUrls: ['./create-socio.component.css']
})
export class CreateSocioComponent {

  socio: Socio = new Socio();
    constructor(private socioService: SocioService,
      private router: Router){}

  ngOnInit(): void {}

  saveSocio(){
    this.socioService.createSocio(this.socio).subscribe(data => {
      console.log(data);
      this.goToSocioList();
    },
    err => console.log(err));
  }
  goToSocioList(){
    this.router.navigate(['/socio']);
  }

  onSubmit(){
    console.log(this.socio);
    this.saveSocio();
  }
}
