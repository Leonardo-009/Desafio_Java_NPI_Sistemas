import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dependente } from '../dependente';
import { DependenteService } from '../dependente.service';


@Component({
  selector: 'app-dependente-detalis',
  templateUrl: './dependente-detalis.component.html',
  styleUrls: ['./dependente-detalis.component.css']
})
export class DependenteDetalisComponent implements OnInit {

  id!: number
  dependente!: Dependente
  constructor(private route: ActivatedRoute, private dependenteService: DependenteService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.dependente = new Dependente();
    this.dependenteService.getDependenteById(this.id).subscribe( data => {
      this.dependente = data;
    });
  }
}

