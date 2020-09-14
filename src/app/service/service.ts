import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonPhone } from '../model/person-phone';

@Injectable()
export class PersonPhoneService {
    constructor(private http: HttpClient) { }
    baseUrl: string = 'http://localhost:59730/api/personPhone';

    obterTodos() {
        return this.http.get<PersonPhone[]>(this.baseUrl);
    }

    obterPorId(id: any) {
        return this.http.get<PersonPhone>(this.baseUrl + '/' + id);
    }

    adicionar(personPhone: PersonPhone) {
        return this.http.post(this.baseUrl, personPhone);
    }

    editar(personPhone: PersonPhone) {
        return this.http.put(this.baseUrl + '/' + personPhone.businessEntityID, personPhone);
    }

    excluir(id: any) {
        return this.http.delete(this.baseUrl + '/' + id);
    }
}
