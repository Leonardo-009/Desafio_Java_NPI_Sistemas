import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Socio } from '../socio';
import { SocioService } from '../socio.service';

@Component({
  selector: 'app-socio-detalis',
  templateUrl: './socio-detalis.component.html',
  styleUrls: ['./socio-detalis.component.css']
})
export class SocioDetalisComponent implements OnInit {

  id!: number
  socio!: Socio
  constructor(private route: ActivatedRoute, private socioService: SocioService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.socio = new Socio();
    this.socioService.getSocioById(this.id).subscribe( data => {
      this.socio = data;
    });
  }
}

