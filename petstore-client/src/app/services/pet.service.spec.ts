import {TestBed, inject} from '@angular/core/testing';

import { PetService } from './pet.service';
import { HttpClient } from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { environment } from '../../environments/environment';

describe('Service: PetService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
      providers: [PetService]
    });

    httpTestingController = TestBed.get(HttpTestingController);

  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', inject([PetService], (service: PetService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an array of pets when get is called', inject([PetService, HttpTestingController], (service: PetService ) => {

    const petsResponse = [
      {
        id: 1,
        name: 'bobby',
        status: 'Available'
      },
      {
        id: 2,
        name: 'lamp',
        status: 'Available'
      }
    ];

    service.getPets().subscribe(pets => {
      expect(pets.length).toBe(2);
    });

    httpTestingController.expectOne(environment.apiUrl +  'pet').flush(petsResponse);

  }))

});
