import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Suplemento } from '../app/suplementos-lista/suplemento'; 

const URL = 'https://668c55380b61b8d23b0d218b.mockapi.io/suplemento';

@Injectable({
  providedIn: 'root'
})
export class SuplementoDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Suplemento[]> {
    return this.http.get<Suplemento[]>(URL)
      .pipe(
        tap((suplementos: Suplemento[]) => suplementos.forEach(suplemento => suplemento.quantity = 0))
      );
  }
}
