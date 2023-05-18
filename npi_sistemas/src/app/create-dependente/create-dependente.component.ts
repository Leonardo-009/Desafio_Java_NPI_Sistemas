import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Dependente } from '../dependente';
import { DependenteService } from '../dependente.service';



@Component({
  selector: 'app-create-dependente',
  templateUrl: './create-dependente.component.html',
  styleUrls: ['./create-dependente.component.css']
})
export class CreateDependenteComponent {

  dependente: Dependente = new Dependente();
    constructor(private dependenteService: DependenteService,
      private router: Router){}

  ngOnInit(): void {}

  saveDependente(){
    this.dependenteService.createDependente(this.dependente).subscribe(data => {
      console.log(data);
      this.goToDependenteList();
    },
    err => console.log(err));
  }
  goToDependenteList(){
    this.router.navigate(['/dependente']);
  }

  onSubmit(){
    console.log(this.dependente);
    this.saveDependente();
  }
}
