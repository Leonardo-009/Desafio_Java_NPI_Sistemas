import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DependenteService } from '../dependente.service';
import { Dependente } from '../dependente';

@Component({
  selector: 'app-dependentelist',
  templateUrl: './dependentelist.component.html',
  styleUrls: ['./dependentelist.component.css']
})
export class DependentelistComponent implements OnInit {

  dependentes!: Dependente[];

  constructor(private dependenteService: DependenteService,
    private router: Router) { }

  ngOnInit(): void {
    this.getDependente();
  }

  private getDependente(){
    this.dependenteService.getDependenteList().subscribe(data => {
      this.dependentes = data;
    });
  }

  DependenteDetails(id: number | undefined){
    if(id !== undefined) {
      this.router.navigate(['dependente-details', id]);
    }
  }

  updateDependente(id: number | undefined){
    if(id !== undefined) {
      this.router.navigate(['update-dependente', id]);
    }
  }

  deleteDependente(id: number | undefined){
    if(id !== undefined) {
      this.dependenteService.deleteDependente(id).subscribe( data => {
        console.log(data);
        this.getDependente();
      })
    }
  }
}
