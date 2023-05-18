import { Component, OnInit } from '@angular/core';
import { Socio } from './../socio';
import { ActivatedRoute, Router } from '@angular/router';
import { SocioService } from '../socio.service';

@Component({
  selector: 'app-update-socio',
  templateUrl: './update-socio.component.html',
  styleUrls: ['./update-socio.component.css']
})
export class UpdateSocioComponent implements OnInit {

  id!: number;
  socio: Socio = new Socio();
  constructor(private socioService: SocioService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.socioService.getSocioById(this.id).subscribe(data => {
      this.socio = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.socioService.updateSocio(this.id, this.socio).subscribe( data =>{
      this.goToSocioList();
    }
    , error => console.log(error));
  }

  goToSocioList(){
    this.router.navigate(['/socio']);
  }
}
