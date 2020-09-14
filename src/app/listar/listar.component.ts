import { Component, OnInit } from '@angular/core';
import { PersonPhoneService } from '../service/service';
import { Router } from '@angular/router';
import { PersonPhone } from '../model/person-phone';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(
    private personPhoneService: PersonPhoneService,
    private router: Router) { }

  personPhone: any;

  ngOnInit() {
    this.personPhoneService.obterTodos()
      .subscribe((data: any) => {
        this.personPhone = data;
      });
  }

  editar(id: number): void {
    this.router.navigate(['editar/' + id]);
  };

  excluir(personPhone: PersonPhone) {
    this.personPhoneService.excluir(personPhone.businessEntityID)
      .subscribe(data => {
        this.personPhoneService.obterTodos()
          .subscribe((data: any) => {
            this.personPhone = data;
          });
      });
  }
}
