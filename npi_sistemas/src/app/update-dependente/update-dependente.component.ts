import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dependente } from '../dependente';
import { DependenteService } from '../dependente.service';

@Component({
  selector: 'app-update-dependente',
  templateUrl: './update-dependente.component.html',
  styleUrls: ['./update-dependente.component.css']
})
export class UpdateDependenteComponent implements OnInit {

  id!: number;
  dependente: Dependente = new Dependente();
  constructor(private dependenteService: DependenteService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.dependenteService.getDependenteById(this.id).subscribe(data => {
      this.dependente = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.dependenteService.updateDependente(this.id, this.dependente).subscribe( data =>{
      this.goToDependenteList();
    }
    , error => console.log(error));
  }

  goToDependenteList(){
    this.router.navigate(['/dependente']);
  }
}
