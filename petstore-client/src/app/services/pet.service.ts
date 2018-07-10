import { Injectable } from '@angular/core';
import { Pet } from '../model/pet';
import { Observable, of } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private petsUrl = environment.apiUrl + 'pet';

  private selectedPet = new Subject<Pet>();
  private pets: Pet[];

  constructor(
    private http: HttpClient) { }

  getPets(): Observable<Pet[]> {
    return this.http
      .get<Pet[]>(this.petsUrl)
      .pipe(
        tap((pets: Pet[]) => {
          this.log(`fetched pets`);
          this.pets = pets;
        }),
        catchError(this.handleError('getPets', []))
    );
  }

  getStatuses(): string[] {
    return ["PENDING", "AVAILABLE", "SOLD"];
  }

  addPet(pet: Pet): Observable<Pet> {
    return this.http
      .post<Pet>(this.petsUrl, pet, httpOptions)
      .pipe(
        tap((pet: Pet) => {
          this.log(`created Pet with id=${pet.id}`);
          this.pets.push(pet);
        }),
        catchError(this.handleError<Pet>('addPet'))
    );
  }

  deletePet(pet: Pet): Observable<Pet> {
    const url = `${this.petsUrl}/${pet.id}`;

    return this.http
      .delete<Pet>(url, httpOptions)
      .pipe(
        tap(_ => {
          this.log(`deleted Pet with id=${pet.id}`);
          this.pets.splice(this.pets.findIndex(p=> p==pet), 1);
        }),
        catchError(this.handleError<Pet>('deletePet'))
    );
  }

  setSelectedPet(pet: Pet) {
    this.selectedPet.next(pet);
  }

  getSelectedPet(): Observable<Pet> {
    return this.selectedPet.asObservable();
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      alert(error.error.message);

      console.error(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log('PetService: ' + message);
  }
}
