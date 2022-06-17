import { Injectable } from '@angular/core';
import { Pet } from '../model/pet';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  private petsUrl = environment.apiUrl + 'pet';

  private selectedPet$ = new BehaviorSubject<Pet>(null);
  private pets: Pet[];

  constructor(
    private http: HttpClient) {
  }

  getPets(): Observable<Pet[]> {
    return this.http
      .get<Pet[]>(this.petsUrl)
      .pipe(
        tap((response: Pet[]) => {
          this.log(`fetched pets`);
          this.pets = response;
        }),
        catchError(this.handleError('getPets', [])),
      );
  }


  addPet(pet: Pet): Observable<Pet> {
    return this.http
      .post<Pet>(this.petsUrl, pet)
      .pipe(
        tap((response: Pet) => {
          this.log(`created Pet with id=${response.id}`);
          this.pets.push(response);
        }),
        catchError(this.handleError<Pet>('addPet')),
      );
  }

  deletePet(pet: Pet): Observable<Pet> {
    const url = `${this.petsUrl}/${pet.id}`;

    return this.http
      .delete<Pet>(url)
      .pipe(
        tap(_ => {
          this.log(`deleted Pet with id=${pet.id}`);
          this.pets.splice(this.pets.findIndex(p => p === pet), 1);
        }),
        catchError(this.handleError<Pet>('deletePet')),
      );
  }

  setSelectedPet(pet: Pet) {
    this.selectedPet$.next(pet);
  }

  clearSelectedPet() {
    this.setSelectedPet(null);
  }

  getSelectedPet(): Observable<Pet> {
    return this.selectedPet$.asObservable();
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (response: HttpErrorResponse): Observable<T> => {
      alert(response.error?.message || response.message);

      console.error(response);

      // Let the app keep running by returning an empty result.
      return of(result);
    };
  }

  /** Log a message */
  private log(message: string) {
    console.log('PetService: ' + message);
  }
}
